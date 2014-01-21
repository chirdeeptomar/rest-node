db.lawyers.aggregate(
	{ 
		$match: {'_id': 499390 ,'profiles.publication_id': 226}
	},
	{ 
		$unwind:'$profiles'
	},
	{
		$match: {'profiles.publication_id': 226}
	}
)