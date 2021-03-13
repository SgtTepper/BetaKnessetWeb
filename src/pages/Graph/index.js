import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { ForceGraph2D as ForceGraph } from 'react-force-graph'
import { ScrollPage } from '../../components/ScrollableView'

import { useCancellableFetch, imageOrDefault } from '../../utils'
import data from './graph.json'
import config from '../../config'

const IMAGE_SIZE = 5;
//The size of a node, determines arrow positions
const NODE_RELSIZE = IMAGE_SIZE;
//The desired zoom level of the graph
const ZOOM = 1.7;
//The distance between nodes
const FORCE_LINK_DISTANCE = IMAGE_SIZE * 8;
//Determines the distance between the nodes. Negative -> More distance
const FORCE_MANYBODIES_STRENGTH = -(IMAGE_SIZE * 4);
//Nodes intersecting each others radius will move away from each other
const FORCE_COLLIDE_RADIUS = NODE_RELSIZE * 1.5;


const syncLoadAllImages = (imageQueue, callback) => {
    let numAll = imageQueue.length;
    let numProcessed = 0;
    let allImages = new Map();

    if (numAll === 0) {
        callback(allImages);
        return;
    }

    imageQueue.forEach(e => {
        const image = new Image();
        const id = e.PersonID;

        // Handle the image loading and error with the same callback.
        image.addEventListener("load", () => {
        numProcessed++;
        allImages.set(id, image);
        if (numAll === numProcessed) {
            if (callback) {
            callback(allImages);
            return;
            }
        }
        });
        image.src = e.imgPath;
    });
};

const paintNodes = (imageMap, node, ctx, globalScale) => {
    if ((!node.x && isNaN(node.x)) || (!node.y && isNaN(node.y))) {
        return
    }
    const image = imageMap.get(parseInt(node.id));
    if (image) {
        const {x,y} = node;
        const width = IMAGE_SIZE
        const height = IMAGE_SIZE * (image.height / image.width)

        ctx.beginPath();
        ctx.rect(x - width / 2 + .3, y - height / 2 + .5, width, height);
        ctx.fillStyle = "#0008";
        ctx.fill();

        ctx.drawImage(
            image,
            x - width / 2,
            y - height / 2,
            width,
            height
            );
    }
}
  

const Graph = React.memo(function () {
    const [persons, setPersons] = useState({})
    const serverFetch = useCancellableFetch()

    //Reference to the graph react instance
    const graphRef = React.useRef(null);
    //Graph Data
    const [imageMap, setImageMap] = React.useState(null);

    useEffect(() => {
        (async () => {
          const res = await serverFetch(`${config.server}/PersonGetAll`)
          const mapping = {}
          for (const p of res) {
            mapping[parseInt(p.PersonID)] = p
          }
          setPersons(mapping)

          for (const node of data.nodes) {
              if (!mapping[parseInt(node.id)]) {
                res.push({PersonID: parseInt(node.id)})
              }
          }

          syncLoadAllImages(res.map(r => ({...r, imgPath: imageOrDefault(r.imgPath, r.PersonID.toString())})), loadedImages => {
            setImageMap(loadedImages);

            //Apply the forces AFTER the graph has rendered the graph data
            
            setTimeout(() => {
                graphRef.current
                .d3Force("link")
                .iterations(1)
                .distance(link => FORCE_LINK_DISTANCE);
            
                graphRef.current.d3Force("center", null);
            }, 100);
          })

        })()
      }, [serverFetch])

    if (!imageMap) {
        return null;
    }

    return (
        <ScrollPage limit id='quotes' parentStyle={{backgroundColor: 'white'}}>
            <div style={{
                position: 'relative', 
                height: '100%', 
                width: '100%', 
                zIndex: 2, 
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    placeContent: 'stretch',
                    height: '100%',
                }}>
                    <ForceGraph 
                        ref={graphRef}
                        graphData={data} 
                        nodeLabel={n => `${persons[n.id].FirstName} ${persons[n.id].LastName}`}
                        linkWidth={l => Math.max(l.weight * 20, .5)} 
                        
                        nodeCanvasObject={(node, ctx, globalScale) =>
                            paintNodes(imageMap, node, ctx, globalScale)
                          }
                         />
                </div>
            </div>
        </ScrollPage>
    )
})
export default Graph
