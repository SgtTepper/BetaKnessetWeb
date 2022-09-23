with for_or_against as
(select rv.[Rule],
	rv.Id,
	Vote,
	count(Name) votes_nums
from rc_Votes rv
where len(Id) < 15
	and rv.[Rule]  like '%חוק%'
	and rv.[Rule] not like '%הודעת%'
	and rv.[Rule] not like '%אי אמון%'
group by rv.[Rule], rv.Id, rv.Vote
having count(Name) > 40)
select votes_for.[Rule],
	votes_for.Id,
	votes_for.Vote as for_vote,
	votes_for.votes_nums,
	votes_against.Vote as against_vote,
	votes_against.votes_nums
from for_or_against votes_for
	join for_or_against votes_against
	on votes_for.Id = votes_against.Id and votes_for.vote = 'בעד' and votes_against.vote = 'נגד'
