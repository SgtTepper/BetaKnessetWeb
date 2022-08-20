select distinct v.[Rule] ,
	v.Date,
	v.Id,
	kptp.PersonID,
	agpd.FullName as Name,
	agpd.imgPath as Mk_imgPath,
	v.Party as faction,
	vpl.faction_picture as faction_picture,
	vpl.PlaceInList,
	vi.ID as interesting_law_id
into rc_Votes_People_in_knesset
from votes v
join Votes_Interesting vi 
	on v.Id = vi.Link
join KNS_PersonToPosition kptp 
	on kptp.PositionID in (43,54,48)
	and v.Date between kptp.StartDate and ISNULL(kptp.FinishDate,GETDATE()) 
join AUG_PersonIdToMkId apitmi   
	on apitmi.PersonID = kptp.PersonID
left join AUG_GovernmentPersonalData agpd 
	on apitmi.MkID = agpd.MkID
left join Votes_Person2Code vpl 
	on apitmi.PersonID = vpl.Code