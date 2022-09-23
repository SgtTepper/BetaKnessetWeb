with summed_rules as (
select rv.Id,
	max(rv.[Rule]) as "Rule",
	max(rv.[Date]) "Date"
from rc_Votes rv
group by rv.Id )
select distinct v.[Rule] ,
	v.Date,
	v.Id,
	kptp.PersonID,
	agpd.FullName as Name,
	agpd.imgPath as Mk_imgPath,
	vpl.Faction as faction,
	vpl.faction_picture as faction_picture,
	vpl.PlaceInList,
	vi.ID as interesting_law_id
into rc_Votes_People_in_knesset
from summed_rules v
join rc_Votes_Interesting vi
	on v.Id = vi.Link and vi.[ID]
join KNS_PersonToPosition kptp
	on kptp.PositionID in (43,54,48)
	and v.Date between kptp.StartDate and ISNULL(nullif(kptp.FinishDate, '1900'), GETDATE())
join AUG_PersonIdToMkId apitmi
	on apitmi.PersonID = kptp.PersonID
left join AUG_GovernmentPersonalData agpd
	on apitmi.MkID = agpd.MkID
left join rc_Votes_Person2Code vpl
	on apitmi.PersonID = vpl.Code