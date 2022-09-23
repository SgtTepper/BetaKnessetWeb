SELECT distinct agpd.FullName as Name,
    apitmi.PersonID as Code,
    NULL as FactionID,
    Null as PlaceInList,
    Null as faction_picture
--into rc_Votes_Person2Code
from KNS_PersonToPosition kptp
join AUG_PersonIdToMkId apitmi
    on apitmi.PersonID = kptp.PersonID
join AUG_GovernmentPersonalData agpd
    on apitmi.MkID = agpd.MkID
where KnessetNum >= 18