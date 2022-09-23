INSERT into AUG_PersonIdToMkId
select kp.PersonID,
	gpd.MkID
from AUG_GovernmentPersonalData gpd
join KNS_Person kp
	on  kp.FirstName + ' '+ kp.LastName = gpd.FullName
where gpd.MkID > 1044

;
Then:
;
select *
from AUG_GovernmentPersonalData gpd
left join KNS_Person kp
	on  kp.FirstName + ' '+ kp.LastName = gpd.FullName
where gpd.MkID > 1044 and PersonID is NULL