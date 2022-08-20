select distinct v.Party votes_parties,
	vpl.Party Votes_PartLogo_parties,
	vpl.party_logo_link 
from votes v
join Votes_Interesting vi 
	on v.Id = vi.Link
left join Votes_PartyLogo vpl 
	on v.Party = vpl.[Party] 