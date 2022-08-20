SELECT distinct agpd.FullName,
	apitmi.PersonID,
	NULL as Faction,
	NULL as PlaceInList,
	NULL as faction_picture
into rc_Votes_Person2Code
from votes v
join Votes_Interesting vi 
	on v.Id = vi.Link
join KNS_PersonToPosition kptp 
	on kptp.PositionID in (43,54,48)
	and v.Date between kptp.StartDate and ISNULL(kptp.FinishDate,GETDATE())
join AUG_PersonIdToMkId apitmi 
	on apitmi.PersonID = kptp.PersonID 
join AUG_GovernmentPersonalData agpd 
	on apitmi.MkID = agpd.MkID 