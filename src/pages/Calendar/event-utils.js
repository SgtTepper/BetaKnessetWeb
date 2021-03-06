let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_580780.doc",
		id : 2144151,
		title: "ישיבת מליאה",
		start: new Date("2020-08-18T13:00:00.000Z"),
		end: new Date("2020-08-18T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_580193.doc",
		id : 2143880,
		title: "ישיבת מליאה",
		start: new Date("2020-08-12T08:00:00.000Z"),
		end: new Date("2020-08-12T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_580053.doc",
		id : 2143879,
		title: "ישיבת מליאה",
		start: new Date("2020-08-11T13:00:00.000Z"),
		end: new Date("2020-08-11T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_579985.doc",
		id : 2143878,
		title: "ישיבת מליאה",
		start: new Date("2020-08-10T13:00:00.000Z"),
		end: new Date("2020-08-10T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_579381.doc",
		id : 2143423,
		title: "ישיבת מליאה",
		start: new Date("2020-08-05T08:00:00.000Z"),
		end: new Date("2020-08-05T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_579166.doc",
		id : 2143422,
		title: "ישיבת מליאה",
		start: new Date("2020-08-04T13:00:00.000Z"),
		end: new Date("2020-08-04T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_579098.doc",
		id : 2143421,
		title: "ישיבת מליאה",
		start: new Date("2020-08-03T13:00:00.000Z"),
		end: new Date("2020-08-03T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_575244.doc",
		id : 2140996,
		title: "ישיבת מליאה",
		start: new Date("2020-07-01T08:00:00.000Z"),
		end: new Date("2020-07-01T20:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_575921.doc",
		id : 2140995,
		title: "ישיבת מליאה",
		start: new Date("2020-06-30T13:00:00.000Z"),
		end: new Date("2020-06-30T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_574990.doc",
		id : 2140994,
		title: "ישיבת מליאה",
		start: new Date("2020-06-29T13:00:00.000Z"),
		end: new Date("2020-06-29T19:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_578461.doc",
		id : 2142963,
		title: "ישיבת מליאה",
		start: new Date("2020-07-28T13:00:00.000Z"),
		end: new Date("2020-07-28T19:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_578694.doc",
		id : 2142964,
		title: "ישיבת מליאה",
		start: new Date("2020-07-29T08:00:00.000Z"),
		end: new Date("2020-07-29T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_585413.doc",
		id : 2146749,
		title: "ישיבת מליאה",
		start: new Date("2020-10-15T08:00:00.000Z"),
		end: new Date("2020-10-15T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_578232.doc",
		id : 2142962,
		title: "ישיבת מליאה",
		start: new Date("2020-07-27T13:00:00.000Z"),
		end: new Date("2020-07-27T17:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_577433.doc",
		id : 2142409,
		title: "ישיבת מליאה",
		start: new Date("2020-07-20T13:00:00.000Z"),
		end: new Date("2020-07-20T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_576809.doc",
		id : 2142020,
		title: "ישיבת מליאה",
		start: new Date("2020-07-15T08:00:00.000Z"),
		end: new Date("2020-07-15T18:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_576621.doc",
		id : 2142019,
		title: "ישיבת מליאה",
		start: new Date("2020-07-14T13:00:00.000Z"),
		end: new Date("2020-07-14T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_576026.doc",
		id : 2141423,
		title: "ישיבת מליאה",
		start: new Date("2020-07-08T08:00:00.000Z"),
		end: new Date("2020-07-27T10:23:59.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_575837.doc",
		id : 2141421,
		title: "ישיבת מליאה",
		start: new Date("2020-07-06T13:00:00.000Z"),
		end: new Date("2020-07-07T01:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_590707.doc",
		id : 2148871,
		title: "ישיבת מליאה",
		start: new Date("2020-11-25T09:00:00.000Z"),
		end: new Date("2020-11-25T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_574590.doc",
		id : 2140671,
		title: "ישיבת מליאה",
		start: new Date("2020-06-24T08:00:00.000Z"),
		end: new Date("2020-06-24T19:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_574356.doc",
		id : 2140669,
		title: "ישיבת מליאה",
		start: new Date("2020-06-22T13:00:00.000Z"),
		end: new Date("2020-06-22T20:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_584332.doc",
		id : 2146604,
		title: "ישיבת מליאה",
		start: new Date("2020-09-29T10:00:00.000Z"),
		end: new Date("2020-09-30T01:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_590512.doc",
		id : 2148869,
		title: "ישיבת מליאה",
		start: new Date("2020-11-24T14:00:00.000Z"),
		end: new Date("2020-11-24T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_587592.doc",
		id : 2147559,
		title: "ישיבת מליאה",
		start: new Date("2020-11-03T14:00:00.000Z"),
		end: new Date("2020-11-03T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_573973.doc",
		id : 2140330,
		title: "ישיבת מליאה",
		start: new Date("2020-06-17T08:00:00.000Z"),
		end: new Date("2020-06-17T13:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_573895.doc",
		id : 2140329,
		title: "ישיבת מליאה",
		start: new Date("2020-06-16T13:00:00.000Z"),
		end: new Date("2020-06-16T20:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_573854.doc",
		id : 2140328,
		title: "ישיבת מליאה",
		start: new Date("2020-06-15T13:00:00.000Z"),
		end: new Date("2020-06-16T05:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_576465.doc",
		id : 2142018,
		title: "ישיבת מליאה",
		start: new Date("2020-07-13T13:00:00.000Z"),
		end: new Date("2020-07-13T18:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_575838.doc",
		id : 2141422,
		title: "ישיבת מליאה",
		start: new Date("2020-07-07T13:00:00.000Z"),
		end: new Date("2020-07-07T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_593344.doc",
		id : 2150820,
		title: "ישיבת מליאה",
		start: new Date("2020-12-21T14:00:00.000Z"),
		end: new Date("2020-12-21T23:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_586796.doc",
		id : 2147168,
		title: "ישיבת מליאה",
		start: new Date("2020-10-28T09:00:00.000Z"),
		end: new Date("2020-10-28T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_592659.doc",
		id : 2150577,
		title: "ישיבת מליאה",
		start: new Date("2020-12-15T11:00:00.000Z"),
		end: new Date("2020-12-15T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_585302.doc",
		id : 2146141,
		title: "ישיבת מליאה",
		start: new Date("2020-10-14T08:00:00.000Z"),
		end: new Date("2020-10-14T18:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_592764.doc",
		id : 2150578,
		title: "ישיבת מליאה",
		start: new Date("2020-12-16T09:00:00.000Z"),
		end: new Date("2020-12-16T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_592559.doc",
		id : 2150576,
		title: "ישיבת מליאה",
		start: new Date("2020-12-14T11:00:00.000Z"),
		end: new Date("2020-12-14T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_573155.doc",
		id : 2140325,
		title: "ישיבת מליאה",
		start: new Date("2020-06-08T13:00:00.000Z"),
		end: new Date("2020-06-08T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_592260.doc",
		id : 2150102,
		title: "ישיבת מליאה",
		start: new Date("2020-12-09T09:00:00.000Z"),
		end: new Date("2020-12-09T19:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_527881.doc",
		id : 2077876,
		title: "ישיבת מליאה",
		start: new Date("2019-01-01T09:00:00.000Z"),
		end: new Date("2019-01-01T22:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_591270.doc",
		id : 2149334,
		title: "ישיבת מליאה",
		start: new Date("2020-12-01T14:00:00.000Z"),
		end: new Date("2020-12-01T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_592060.doc",
		id : 2150101,
		title: "ישיבת מליאה",
		start: new Date("2020-12-08T14:00:00.000Z"),
		end: new Date("2020-12-08T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_591979.doc",
		id : 2150100,
		title: "ישיבת מליאה",
		start: new Date("2020-12-07T14:00:00.000Z"),
		end: new Date("2020-12-07T20:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_582094.doc",
		id : 2145152,
		title: "ישיבת מליאה",
		start: new Date("2020-09-07T13:00:00.000Z"),
		end: new Date("2020-09-07T18:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_591478.doc",
		id : 2149335,
		title: "ישיבת מליאה",
		start: new Date("2020-12-02T09:00:00.000Z"),
		end: new Date("2020-12-02T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_572852.doc",
		id : 2140029,
		title: "ישיבת מליאה",
		start: new Date("2020-06-02T13:00:00.000Z"),
		end: new Date("2020-06-02T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_572941.doc",
		id : 2140030,
		title: "ישיבת מליאה",
		start: new Date("2020-06-03T08:00:00.000Z"),
		end: new Date("2020-06-03T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_572851.doc",
		id : 2140028,
		title: "ישיבת מליאה",
		start: new Date("2020-06-01T13:00:00.000Z"),
		end: new Date("2020-06-02T00:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_572318.doc",
		id : 2088516,
		title: "ישיבת מליאה",
		start: new Date("2020-05-27T08:00:00.000Z"),
		end: new Date("2020-05-27T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_572086.doc",
		id : 2088514,
		title: "ישיבת מליאה",
		start: new Date("2020-05-25T13:00:00.000Z"),
		end: new Date("2020-05-25T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_577841.doc",
		id : 2142411,
		title: "ישיבת מליאה",
		start: new Date("2020-07-22T08:00:00.000Z"),
		end: new Date("2020-07-22T21:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_588935.doc",
		id : 2147840,
		title: "ישיבת מליאה",
		start: new Date("2020-11-11T09:00:00.000Z"),
		end: new Date("2020-11-11T20:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_581328.doc",
		id : 2144613,
		title: "ישיבת מליאה",
		start: new Date("2020-08-24T13:00:00.000Z"),
		end: new Date("2020-08-24T19:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570636.doc",
		id : 2088345,
		title: "ישיבת מליאה",
		start: new Date("2020-05-17T10:00:00.000Z"),
		end: new Date("2020-05-17T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570540.doc",
		id : 2088265,
		title: "ישיבת מליאה",
		start: new Date("2020-05-13T08:00:00.000Z"),
		end: new Date("2020-05-13T18:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570391.doc",
		id : 2088186,
		title: "ישיבת מליאה",
		start: new Date("2020-05-11T13:00:00.000Z"),
		end: new Date("2020-05-11T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570146.doc",
		id : 2088092,
		title: "ישיבת מליאה",
		start: new Date("2020-05-05T07:00:00.000Z"),
		end: new Date("2020-05-07T09:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_569775.doc",
		id : 2087905,
		title: "ישיבת מליאה",
		start: new Date("2020-05-04T13:00:00.000Z"),
		end: new Date("2020-05-04T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_591138.doc",
		id : 2149333,
		title: "ישיבת מליאה",
		start: new Date("2020-11-30T14:00:00.000Z"),
		end: new Date("2020-11-30T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_589605.doc",
		id : 2148377,
		title: "ישיבת מליאה",
		start: new Date("2020-11-17T14:00:00.000Z"),
		end: new Date("2020-11-17T18:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_590404.doc",
		id : 2148868,
		title: "ישיבת מליאה",
		start: new Date("2020-11-23T14:00:00.000Z"),
		end: new Date("2020-11-23T19:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_589465.doc",
		id : 2148376,
		title: "ישיבת מליאה",
		start: new Date("2020-11-16T14:00:00.000Z"),
		end: new Date("2020-11-16T16:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_589919.doc",
		id : 2148378,
		title: "ישיבת מליאה",
		start: new Date("2020-11-18T09:00:00.000Z"),
		end: new Date("2020-11-18T18:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_583462.doc",
		id : 2146137,
		title: "ישיבת מליאה",
		start: new Date("2020-09-22T08:00:00.000Z"),
		end: new Date("2020-09-22T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_569502.doc",
		id : 2087767,
		title: "ישיבת מליאה",
		start: new Date("2020-04-30T06:00:00.000Z"),
		end: new Date("2020-04-30T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_582932.doc",
		id : 2145464,
		title: "ישיבת מליאה",
		start: new Date("2020-09-16T08:00:00.000Z"),
		end: new Date("2020-09-16T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_588543.doc",
		id : 2147839,
		title: "ישיבת מליאה",
		start: new Date("2020-11-10T09:00:00.000Z"),
		end: new Date("2020-11-10T17:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_588383.doc",
		id : 2147838,
		title: "ישיבת מליאה",
		start: new Date("2020-11-09T14:00:00.000Z"),
		end: new Date("2020-11-09T18:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_574403.doc",
		id : 2140670,
		title: "ישיבת מליאה",
		start: new Date("2020-06-23T13:00:00.000Z"),
		end: new Date("2020-06-23T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_582791.doc",
		id : 2145463,
		title: "ישיבת מליאה",
		start: new Date("2020-09-15T13:00:00.000Z"),
		end: new Date("2020-09-15T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_582381.doc",
		id : 2145154,
		title: "ישיבת מליאה",
		start: new Date("2020-09-09T08:00:00.000Z"),
		end: new Date("2020-09-09T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_573318.doc",
		id : 2140327,
		title: "ישיבת מליאה",
		start: new Date("2020-06-10T08:00:00.000Z"),
		end: new Date("2020-06-10T12:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_573219.doc",
		id : 2140326,
		title: "ישיבת מליאה",
		start: new Date("2020-06-09T13:00:00.000Z"),
		end: new Date("2020-06-09T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_587869.doc",
		id : 2147560,
		title: "ישיבת מליאה",
		start: new Date("2020-11-04T09:00:00.000Z"),
		end: new Date("2020-11-04T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_580925.doc",
		id : 2144152,
		title: "ישיבת מליאה",
		start: new Date("2020-08-19T08:00:00.000Z"),
		end: new Date("2020-08-19T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_572122.doc",
		id : 2088515,
		title: "ישיבת מליאה",
		start: new Date("2020-05-26T13:00:00.000Z"),
		end: new Date("2020-05-26T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_571052.doc",
		id : 2088347,
		title: "ישיבת מליאה",
		start: new Date("2020-05-19T13:00:00.000Z"),
		end: new Date("2020-05-19T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570907.doc",
		id : 2088343,
		title: "ישיבת מליאה",
		start: new Date("2020-05-18T13:00:00.000Z"),
		end: new Date("2020-05-18T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_580703.doc",
		id : 2144150,
		title: "ישיבת מליאה",
		start: new Date("2020-08-17T13:00:00.000Z"),
		end: new Date("2020-08-17T19:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_581651.doc",
		id : 2144615,
		title: "ישיבת מליאה",
		start: new Date("2020-08-26T08:00:00.000Z"),
		end: new Date("2020-08-26T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_587399.doc",
		id : 2147558,
		title: "ישיבת מליאה",
		start: new Date("2020-11-02T14:00:00.000Z"),
		end: new Date("2020-11-02T18:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_586500.doc",
		id : 2147166,
		title: "ישיבת מליאה",
		start: new Date("2020-10-26T14:00:00.000Z"),
		end: new Date("2020-10-26T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_569414.doc",
		id : 2087750,
		title: "ישיבת מליאה",
		start: new Date("2020-04-27T08:00:00.000Z"),
		end: new Date("2020-04-27T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_569327.doc",
		id : 2087733,
		title: "ישיבת מליאה",
		start: new Date("2020-04-26T08:00:00.000Z"),
		end: new Date("2020-04-26T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_586872.doc",
		id : 2147834,
		title: "ישיבת מליאה",
		start: new Date("2020-10-29T11:00:00.000Z"),
		end: new Date("2020-10-29T11:50:00.000Z"),
		"IsSpecialMeeting" : 1
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_586576.doc",
		id : 2147167,
		title: "ישיבת מליאה",
		start: new Date("2020-10-27T14:00:00.000Z"),
		end: new Date("2020-10-27T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_582206.doc",
		id : 2145153,
		title: "ישיבת מליאה",
		start: new Date("2020-09-08T13:00:00.000Z"),
		end: new Date("2020-09-08T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_586002.doc",
		id : 2146943,
		title: "ישיבת מליאה",
		start: new Date("2020-10-21T08:00:00.000Z"),
		end: new Date("2020-10-21T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_585960.doc",
		id : 2146942,
		title: "ישיבת מליאה",
		start: new Date("2020-10-20T13:00:00.000Z"),
		end: new Date("2020-10-20T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_585801.doc",
		id : 2146941,
		title: "ישיבת מליאה",
		start: new Date("2020-10-19T13:00:00.000Z"),
		end: new Date("2020-10-19T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_569421.doc",
		id : 2087757,
		title: "ישיבת מליאה",
		start: new Date("2020-04-28T07:55:00.000Z"),
		end: new Date("2020-04-28T09:35:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_584881.doc",
		id : 2146139,
		title: "ישיבת מליאה",
		start: new Date("2020-10-12T13:00:00.000Z"),
		end: new Date("2020-10-12T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_585060.doc",
		id : 2146140,
		title: "ישיבת מליאה",
		start: new Date("2020-10-13T13:00:00.000Z"),
		end: new Date("2020-10-13T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_569332.doc",
		id : 2087642,
		title: "ישיבת מליאה",
		start: new Date("2020-04-23T08:00:00.000Z"),
		end: new Date("2020-04-23T23:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568897.doc",
		id : 2087440,
		title: "ישיבת מליאה",
		start: new Date("2020-04-22T08:00:00.000Z"),
		end: new Date("2020-04-22T11:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568835.doc",
		id : 2087439,
		title: "ישיבת מליאה",
		start: new Date("2020-04-21T06:45:00.000Z"),
		end: new Date("2020-04-21T08:25:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568798.doc",
		id : 2087387,
		title: "ישיבת מליאה",
		start: new Date("2020-04-20T08:00:00.000Z"),
		end: new Date("2020-04-20T11:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568527.doc",
		id : 2087386,
		title: "ישיבת מליאה",
		start: new Date("2020-04-16T13:00:00.000Z"),
		end: new Date("2020-04-16T18:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_584062.doc",
		id : 2146529,
		title: "ישיבת מליאה",
		start: new Date("2020-09-24T12:00:00.000Z"),
		end: new Date("2020-09-25T11:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_583773.doc",
		id : 2146138,
		title: "ישיבת מליאה",
		start: new Date("2020-09-23T08:00:00.000Z"),
		end: new Date("2020-09-23T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_581447.doc",
		id : 2144614,
		title: "ישיבת מליאה",
		start: new Date("2020-08-25T13:00:00.000Z"),
		end: new Date("2020-08-25T13:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_582709.doc",
		id : 2145462,
		title: "ישיבת מליאה",
		start: new Date("2020-09-14T13:00:00.000Z"),
		end: new Date("2020-09-14T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_577589.doc",
		id : 2142410,
		title: "ישיבת מליאה",
		start: new Date("2020-07-21T13:00:00.000Z"),
		end: new Date("2020-07-21T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560784.doc",
		id : 2083417,
		title: "ישיבת מליאה",
		start: new Date("2019-11-11T14:00:00.000Z"),
		end: new Date("2019-11-11T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_571210.doc",
		id : 2088386,
		title: "ישיבת מליאה",
		start: new Date("2020-05-20T08:00:00.000Z"),
		end: new Date("2020-05-20T09:43:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568225.doc",
		id : 2087006,
		title: "ישיבת מליאה",
		start: new Date("2020-04-01T08:00:00.000Z"),
		end: new Date("2020-04-01T09:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568198.doc",
		id : 2087005,
		title: "ישיבת מליאה",
		start: new Date("2020-03-31T13:00:00.000Z"),
		end: new Date("2020-03-31T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568178.doc",
		id : 2086843,
		title: "ישיבת מליאה",
		start: new Date("2020-03-30T13:00:00.000Z"),
		end: new Date("2020-03-30T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568064.doc",
		id : 2086722,
		title: "ישיבת מליאה",
		start: new Date("2020-03-24T14:00:00.000Z"),
		end: new Date("2020-03-24T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568056.doc",
		id : 2086596,
		title: "ישיבת מליאה",
		start: new Date("2020-03-23T14:00:00.000Z"),
		end: new Date("2020-03-23T22:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_567936.doc",
		id : 2086186,
		title: "ישיבת מליאה",
		start: new Date("2020-03-17T14:00:00.000Z"),
		end: new Date("2020-03-17T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570560.doc",
		id : 2088322,
		title: "ישיבת מליאה",
		start: new Date("2020-05-14T15:00:00.000Z"),
		end: new Date("2020-05-14T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568115.doc",
		id : 2086899,
		title: "ישיבת מליאה",
		start: new Date("2020-03-26T14:00:00.000Z"),
		end: new Date("2020-03-26T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568430.doc",
		id : 2087346,
		title: "ישיבת מליאה",
		start: new Date("2020-04-07T10:00:00.000Z"),
		end: new Date("2020-04-07T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568403.doc",
		id : 2087163,
		title: "ישיבת מליאה",
		start: new Date("2020-04-06T13:00:00.000Z"),
		end: new Date("2020-04-07T00:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_570446.doc",
		id : 2088187,
		title: "ישיבת מליאה",
		start: new Date("2020-05-12T13:00:00.000Z"),
		end: new Date("2020-05-12T19:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_567915.doc",
		id : 2085570,
		title: "ישיבת מליאה",
		start: new Date("2020-03-16T14:00:00.000Z"),
		end: new Date("2020-03-16T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560004.doc",
		id : 2081956,
		title: "ישיבת מליאה",
		start: new Date("2019-10-28T14:00:00.000Z"),
		end: new Date("2019-10-28T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_567989.doc",
		id : 2086284,
		title: "ישיבת מליאה",
		start: new Date("2020-03-18T09:00:00.000Z"),
		end: new Date("2020-03-18T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/23\/Plenum\/23_ptm_568067.doc",
		id : 2086801,
		title: "ישיבת מליאה",
		start: new Date("2020-03-25T09:00:00.000Z"),
		end: new Date("2020-03-25T09:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_565303.doc",
		id : 2084298,
		title: "ישיבת מליאה",
		start: new Date("2019-12-09T14:00:00.000Z"),
		end: new Date("2019-12-09T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_566323.doc",
		id : 2084300,
		title: "ישיבת מליאה",
		start: new Date("2019-12-11T09:00:00.000Z"),
		end: new Date("2019-12-12T01:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_567841.doc",
		id : 2085426,
		title: "ישיבת מליאה",
		start: new Date("2020-02-17T10:00:00.000Z"),
		end: new Date("2020-02-17T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_565338.doc",
		id : 2084299,
		title: "ישיבת מליאה",
		start: new Date("2019-12-10T14:00:00.000Z"),
		end: new Date("2019-12-10T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_567756.doc",
		id : 2085167,
		title: "ישיבת מליאה",
		start: new Date("2020-01-28T09:00:00.000Z"),
		end: new Date("2020-01-28T11:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_564959.doc",
		id : 2084110,
		title: "ישיבת מליאה",
		start: new Date("2019-12-04T09:00:00.000Z"),
		end: new Date("2019-12-05T05:30:40.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_564915.doc",
		id : 2084108,
		title: "ישיבת מליאה",
		start: new Date("2019-12-03T14:00:00.000Z"),
		end: new Date("2019-12-03T16:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_564884.doc",
		id : 2084105,
		title: "ישיבת מליאה",
		start: new Date("2019-12-02T14:00:00.000Z"),
		end: new Date("2019-12-02T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_564507.doc",
		id : 2083927,
		title: "ישיבת מליאה",
		start: new Date("2019-11-27T09:00:00.000Z"),
		end: new Date("2019-11-27T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_561558.doc",
		id : 2083419,
		title: "ישיבת מליאה",
		start: new Date("2019-11-13T09:00:00.000Z"),
		end: new Date("2019-11-13T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560532.doc",
		id : 2083416,
		title: "ישיבת מליאה",
		start: new Date("2019-11-10T15:00:00.000Z"),
		end: new Date("2019-11-10T16:00:00.000Z"),
		"IsSpecialMeeting" : 1
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_563541.doc",
		id : 2083671,
		title: "ישיבת מליאה",
		start: new Date("2019-11-20T09:00:00.000Z"),
		end: new Date("2019-11-20T13:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_563174.doc",
		id : 2083670,
		title: "ישיבת מליאה",
		start: new Date("2019-11-19T14:00:00.000Z"),
		end: new Date("2019-11-19T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_563138.doc",
		id : 2083669,
		title: "ישיבת מליאה",
		start: new Date("2019-11-18T14:00:00.000Z"),
		end: new Date("2019-11-18T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_567805.doc",
		id : 2085377,
		title: "ישיבת מליאה",
		start: new Date("2020-02-10T09:00:00.000Z"),
		end: new Date("2020-02-10T10:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_564420.doc",
		id : 2083923,
		title: "ישיבת מליאה",
		start: new Date("2019-11-25T14:00:00.000Z"),
		end: new Date("2019-11-25T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560466.doc",
		id : 2083169,
		title: "ישיבת מליאה",
		start: new Date("2019-11-06T09:00:00.000Z"),
		end: new Date("2019-11-06T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560390.doc",
		id : 2083167,
		title: "ישיבת מליאה",
		start: new Date("2019-11-04T14:00:00.000Z"),
		end: new Date("2019-11-04T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560068.doc",
		id : 2081958,
		title: "ישיבת מליאה",
		start: new Date("2019-10-30T09:00:00.000Z"),
		end: new Date("2019-10-30T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_566930.doc",
		id : 2084510,
		title: "ישיבת מליאה",
		start: new Date("2019-12-18T11:00:00.000Z"),
		end: new Date("2019-12-18T12:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_564459.doc",
		id : 2083925,
		title: "ישיבת מליאה",
		start: new Date("2019-11-26T14:00:00.000Z"),
		end: new Date("2019-11-26T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560798.doc",
		id : 2083418,
		title: "ישיבת מליאה",
		start: new Date("2019-11-12T14:00:00.000Z"),
		end: new Date("2019-11-12T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_559837.doc",
		id : 2081156,
		title: "ישיבת מליאה",
		start: new Date("2019-09-11T09:00:00.000Z"),
		end: new Date("2019-09-11T12:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_549056.doc",
		id : 2080958,
		title: "ישיבת מליאה",
		start: new Date("2019-07-10T10:00:00.000Z"),
		end: new Date("2019-07-10T11:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548930.doc",
		id : 2080893,
		title: "ישיבת מליאה",
		start: new Date("2019-07-01T08:00:00.000Z"),
		end: new Date("2019-07-01T10:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548878.doc",
		id : 2080868,
		title: "ישיבת מליאה",
		start: new Date("2019-06-24T09:00:00.000Z"),
		end: new Date("2019-06-24T11:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548711.doc",
		id : 2080819,
		title: "ישיבת מליאה",
		start: new Date("2019-06-12T08:00:00.000Z"),
		end: new Date("2019-06-12T10:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_559802.doc",
		id : 2081147,
		title: "ישיבת מליאה",
		start: new Date("2019-09-09T10:00:00.000Z"),
		end: new Date("2019-09-09T10:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548669.doc",
		id : 2080818,
		title: "ישיבת מליאה",
		start: new Date("2019-06-11T13:00:00.000Z"),
		end: new Date("2019-06-11T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560413.doc",
		id : 2083168,
		title: "ישיבת מליאה",
		start: new Date("2019-11-05T14:00:00.000Z"),
		end: new Date("2019-11-05T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548361.doc",
		id : 2080595,
		title: "ישיבת מליאה",
		start: new Date("2019-05-29T08:00:00.000Z"),
		end: new Date("2019-05-29T21:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548251.doc",
		id : 2080594,
		title: "ישיבת מליאה",
		start: new Date("2019-05-28T13:00:00.000Z"),
		end: new Date("2019-05-28T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548206.doc",
		id : 2080593,
		title: "ישיבת מליאה",
		start: new Date("2019-05-27T13:00:00.000Z"),
		end: new Date("2019-05-27T23:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_547551.doc",
		id : 2080358,
		title: "ישיבת מליאה",
		start: new Date("2019-05-21T13:00:00.000Z"),
		end: new Date("2019-05-21T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_547468.doc",
		id : 2080341,
		title: "ישיבת מליאה",
		start: new Date("2019-05-20T13:00:00.000Z"),
		end: new Date("2019-05-20T22:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_546901.doc",
		id : 2079974,
		title: "ישיבת מליאה",
		start: new Date("2019-05-15T08:00:00.000Z"),
		end: new Date("2019-05-15T10:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_546842.doc",
		id : 2079972,
		title: "ישיבת מליאה",
		start: new Date("2019-05-14T13:00:00.000Z"),
		end: new Date("2019-05-14T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_546767.doc",
		id : 2079963,
		title: "ישיבת מליאה",
		start: new Date("2019-05-13T13:00:00.000Z"),
		end: new Date("2019-05-13T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_560027.doc",
		id : 2081957,
		title: "ישיבת מליאה",
		start: new Date("2019-10-29T14:00:00.000Z"),
		end: new Date("2019-10-29T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_559860.doc",
		id : 2081166,
		title: "ישיבת מליאה",
		start: new Date("2019-10-03T15:00:00.000Z"),
		end: new Date("2019-10-03T16:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/22\/Plenum\/22_ptm_559855.doc",
		id : 2081163,
		title: "ישיבת מליאה",
		start: new Date("2019-10-03T13:00:00.000Z"),
		end: new Date("2019-10-03T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548929.doc",
		id : 2080895,
		title: "ישיבת מליאה",
		start: new Date("2019-07-01T10:00:00.000Z"),
		end: new Date("2019-07-01T10:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_527548.doc",
		id : 2077451,
		title: "ישיבת מליאה",
		start: new Date("2018-12-26T09:00:00.000Z"),
		end: new Date("2018-12-26T18:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_527411.doc",
		id : 2077450,
		title: "ישיבת מליאה",
		start: new Date("2018-12-25T14:00:00.000Z"),
		end: new Date("2018-12-25T17:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_527340.doc",
		id : 2077449,
		title: "ישיבת מליאה",
		start: new Date("2018-12-24T14:00:00.000Z"),
		end: new Date("2018-12-24T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_528328.doc",
		id : 2078320,
		title: "ישיבת מליאה",
		start: new Date("2019-01-09T08:00:00.000Z"),
		end: new Date("2019-01-09T09:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_527740.doc",
		id : 2077875,
		title: "ישיבת מליאה",
		start: new Date("2018-12-31T11:00:00.000Z"),
		end: new Date("2018-12-31T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_520634.doc",
		id : 2076555,
		title: "ישיבת מליאה",
		start: new Date("2018-11-26T15:30:00.000Z"),
		end: new Date("2018-11-26T21:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_526922.doc",
		id : 2077084,
		title: "ישיבת מליאה",
		start: new Date("2018-12-18T14:00:00.000Z"),
		end: new Date("2018-12-18T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_526876.doc",
		id : 2077083,
		title: "ישיבת מליאה",
		start: new Date("2018-12-17T14:00:00.000Z"),
		end: new Date("2018-12-17T21:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_526522.doc",
		id : 2076893,
		title: "ישיבת מליאה",
		start: new Date("2018-12-12T09:00:00.000Z"),
		end: new Date("2018-12-12T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_526370.doc",
		id : 2076892,
		title: "ישיבת מליאה",
		start: new Date("2018-12-11T14:00:00.000Z"),
		end: new Date("2018-12-11T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_526305.doc",
		id : 2076891,
		title: "ישיבת מליאה",
		start: new Date("2018-12-10T14:00:00.000Z"),
		end: new Date("2018-12-10T22:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_525884.doc",
		id : 2076536,
		title: "ישיבת מליאה",
		start: new Date("2018-12-03T11:00:00.000Z"),
		end: new Date("2018-12-03T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_501022.doc",
		id : 2071518,
		title: "ישיבת מליאה",
		start: new Date("2018-06-19T13:00:00.000Z"),
		end: new Date("2018-06-19T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_492846.doc",
		id : 2067907,
		title: "ישיבת מליאה",
		start: new Date("2018-04-30T13:00:00.000Z"),
		end: new Date("2018-05-01T00:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_492145.doc",
		id : 2066728,
		title: "ישיבת מליאה",
		start: new Date("2018-03-13T14:00:00.000Z"),
		end: new Date("2018-03-14T23:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_451365.doc",
		id : 2063235,
		title: "ישיבת מליאה",
		start: new Date("2018-01-08T14:00:00.000Z"),
		end: new Date("2018-01-09T06:53:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_395938.doc",
		id : 2024449,
		title: "ישיבת מליאה",
		start: new Date("2017-12-18T11:00:00.000Z"),
		end: new Date("2017-12-18T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_395222.doc",
		id : 2023936,
		title: "ישיבת מליאה",
		start: new Date("2017-12-06T09:00:00.000Z"),
		end: new Date("2017-12-06T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_394444.doc",
		id : 2023533,
		title: "ישיבת מליאה",
		start: new Date("2017-11-27T14:00:00.000Z"),
		end: new Date("2017-11-27T19:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_393570.doc",
		id : 2022939,
		title: "ישיבת מליאה",
		start: new Date("2017-11-15T09:00:00.000Z"),
		end: new Date("2017-11-15T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392744.doc",
		id : 2022525,
		title: "ישיבת מליאה",
		start: new Date("2017-11-06T14:00:00.000Z"),
		end: new Date("2017-11-06T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_500981.doc",
		id : 2071517,
		title: "ישיבת מליאה",
		start: new Date("2018-06-18T13:00:00.000Z"),
		end: new Date("2018-06-18T21:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_493401.doc",
		id : 2068521,
		title: "ישיבת מליאה",
		start: new Date("2018-05-08T13:00:00.000Z"),
		end: new Date("2018-05-08T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_395693.doc",
		id : 2024258,
		title: "ישיבת מליאה",
		start: new Date("2017-12-13T09:00:00.000Z"),
		end: new Date("2017-12-13T13:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_526030.doc",
		id : 2076538,
		title: "ישיבת מליאה",
		start: new Date("2018-12-05T09:00:00.000Z"),
		end: new Date("2018-12-05T13:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_520635.doc",
		id : 2076210,
		title: "ישיבת מליאה",
		start: new Date("2018-11-27T14:00:00.000Z"),
		end: new Date("2018-11-27T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_520785.doc",
		id : 2076211,
		title: "ישיבת מליאה",
		start: new Date("2018-11-28T09:00:00.000Z"),
		end: new Date("2018-11-28T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_489441.doc",
		id : 2065375,
		title: "ישיבת מליאה",
		start: new Date("2018-02-19T14:00:00.000Z"),
		end: new Date("2018-02-19T22:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488897.doc",
		id : 2064931,
		title: "ישיבת מליאה",
		start: new Date("2018-02-13T14:00:00.000Z"),
		end: new Date("2018-02-13T21:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_489467.doc",
		id : 2025259,
		title: "ישיבת מליאה",
		start: new Date("2017-12-25T14:00:00.000Z"),
		end: new Date("2017-12-27T23:48:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_383882.doc",
		id : 2016214,
		title: "ישיבת מליאה",
		start: new Date("2017-05-10T08:00:00.000Z"),
		end: new Date("2017-05-11T00:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_369184.doc",
		id : 2014402,
		title: "ישיבת מליאה",
		start: new Date("2017-02-20T14:00:00.000Z"),
		end: new Date("2017-02-20T21:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_494070.doc",
		id : 2068990,
		title: "ישיבת מליאה",
		start: new Date("2018-05-16T08:00:00.000Z"),
		end: new Date("2018-05-16T11:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_391705.doc",
		id : 2020738,
		title: "ישיבת מליאה",
		start: new Date("2017-10-24T13:00:00.000Z"),
		end: new Date("2017-10-24T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_520633.doc",
		id : 2075875,
		title: "ישיבת מליאה",
		start: new Date("2018-11-21T09:00:00.000Z"),
		end: new Date("2018-11-21T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_520127.doc",
		id : 2075873,
		title: "ישיבת מליאה",
		start: new Date("2018-11-19T14:00:00.000Z"),
		end: new Date("2018-11-19T20:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_519776.doc",
		id : 2075509,
		title: "ישיבת מליאה",
		start: new Date("2018-11-14T09:00:00.000Z"),
		end: new Date("2018-11-14T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_425373.doc",
		id : 2063237,
		title: "ישיבת מליאה",
		start: new Date("2018-01-10T09:00:00.000Z"),
		end: new Date("2018-01-10T15:33:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_519679.doc",
		id : 2075508,
		title: "ישיבת מליאה",
		start: new Date("2018-11-13T14:00:00.000Z"),
		end: new Date("2018-11-13T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_519617.doc",
		id : 2075507,
		title: "ישיבת מליאה",
		start: new Date("2018-11-12T14:00:00.000Z"),
		end: new Date("2018-11-12T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392963.doc",
		id : 2022527,
		title: "ישיבת מליאה",
		start: new Date("2017-11-08T09:00:00.000Z"),
		end: new Date("2017-11-08T17:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_382794.doc",
		id : 2016332,
		title: "ישיבת מליאה",
		start: new Date("2017-04-26T08:00:00.000Z"),
		end: new Date("2017-04-26T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_519243.doc",
		id : 2075132,
		title: "ישיבת מליאה",
		start: new Date("2018-11-05T14:00:00.000Z"),
		end: new Date("2018-11-05T23:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_397492.doc",
		id : 2025264,
		title: "ישיבת מליאה",
		start: new Date("2018-01-03T09:00:00.000Z"),
		end: new Date("2018-01-03T18:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_383884.doc",
		id : 2016938,
		title: "ישיבת מליאה",
		start: new Date("2017-05-16T13:00:00.000Z"),
		end: new Date("2017-05-16T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_369341.doc",
		id : 2014404,
		title: "ישיבת מליאה",
		start: new Date("2017-02-22T09:00:00.000Z"),
		end: new Date("2017-02-22T14:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_549361.doc",
		id : 2081022,
		title: "ישיבת מליאה",
		start: new Date("2019-07-15T09:00:00.000Z"),
		end: new Date("2019-07-15T11:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_500396.doc",
		id : 2071138,
		title: "ישיבת מליאה",
		start: new Date("2018-06-11T13:00:00.000Z"),
		end: new Date("2018-06-11T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_394655.doc",
		id : 2023535,
		title: "ישיבת מליאה",
		start: new Date("2017-11-29T09:00:00.000Z"),
		end: new Date("2017-11-29T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_394142.doc",
		id : 2023187,
		title: "ישיבת מליאה",
		start: new Date("2017-11-22T09:00:00.000Z"),
		end: new Date("2017-11-22T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_504071.doc",
		id : 2073133,
		title: "ישיבת מליאה",
		start: new Date("2018-07-17T13:00:00.000Z"),
		end: new Date("2018-07-19T01:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_499645.doc",
		id : 2070747,
		title: "ישיבת מליאה",
		start: new Date("2018-06-04T13:00:00.000Z"),
		end: new Date("2018-06-04T17:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_499856.doc",
		id : 2070749,
		title: "ישיבת מליאה",
		start: new Date("2018-06-06T08:00:00.000Z"),
		end: new Date("2018-06-06T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_462601.doc",
		id : 2063486,
		title: "ישיבת מליאה",
		start: new Date("2018-01-15T14:00:00.000Z"),
		end: new Date("2018-01-15T20:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518145.doc",
		id : 2073992,
		title: "ישיבת מליאה",
		start: new Date("2018-10-17T08:00:00.000Z"),
		end: new Date("2018-10-17T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_490746.doc",
		id : 2066321,
		title: "ישיבת מליאה",
		start: new Date("2018-03-07T09:00:00.000Z"),
		end: new Date("2018-03-07T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_397330.doc",
		id : 2025263,
		title: "ישיבת מליאה",
		start: new Date("2018-01-02T14:00:00.000Z"),
		end: new Date("2018-01-02T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_397329.doc",
		id : 2025262,
		title: "ישיבת מליאה",
		start: new Date("2018-01-01T14:00:00.000Z"),
		end: new Date("2018-01-02T00:52:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392403.doc",
		id : 2022089,
		title: "ישיבת מליאה",
		start: new Date("2017-11-01T15:00:00.000Z"),
		end: new Date("2017-11-01T15:40:00.000Z"),
		"IsSpecialMeeting" : 1
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_393966.doc",
		id : 2023186,
		title: "ישיבת מליאה",
		start: new Date("2017-11-21T14:00:00.000Z"),
		end: new Date("2017-11-21T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_498468.doc",
		id : 2069905,
		title: "ישיבת מליאה",
		start: new Date("2018-05-21T13:00:00.000Z"),
		end: new Date("2018-05-21T18:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_393852.doc",
		id : 2023184,
		title: "ישיבת מליאה",
		start: new Date("2017-11-20T14:00:00.000Z"),
		end: new Date("2017-11-20T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_391657.doc",
		id : 2020737,
		title: "ישיבת מליאה",
		start: new Date("2017-10-23T13:00:00.000Z"),
		end: new Date("2017-10-23T18:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_521401.doc",
		id : 2073980,
		title: "ישיבת מליאה",
		start: new Date("2018-08-08T09:00:00.000Z"),
		end: new Date("2018-08-08T12:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518274.doc",
		id : 2074557,
		title: "ישיבת מליאה",
		start: new Date("2018-10-21T14:00:00.000Z"),
		end: new Date("2018-10-21T14:50:00.000Z"),
		"IsSpecialMeeting" : 1
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_504489.doc",
		id : 2074241,
		title: "ישיבת מליאה",
		start: new Date("2018-09-17T11:00:00.000Z"),
		end: new Date("2018-09-17T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_502958.doc",
		id : 2072765,
		title: "ישיבת מליאה",
		start: new Date("2018-07-09T13:00:00.000Z"),
		end: new Date("2018-07-10T02:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_525926.doc",
		id : 2076537,
		title: "ישיבת מליאה",
		start: new Date("2018-12-04T11:00:00.000Z"),
		end: new Date("2018-12-04T13:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518396.doc",
		id : 2074558,
		title: "ישיבת מליאה",
		start: new Date("2018-10-22T13:00:00.000Z"),
		end: new Date("2018-10-22T18:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_519281.doc",
		id : 2075133,
		title: "ישיבת מליאה",
		start: new Date("2018-11-06T14:00:00.000Z"),
		end: new Date("2018-11-06T16:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_559789.doc",
		id : 2081116,
		title: "ישיבת מליאה",
		start: new Date("2019-09-04T08:00:00.000Z"),
		end: new Date("2019-09-04T08:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_559756.doc",
		id : 2081104,
		title: "ישיבת מליאה",
		start: new Date("2019-08-13T08:00:00.000Z"),
		end: new Date("2019-08-13T08:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_549051.doc",
		id : 2080956,
		title: "ישיבת מליאה",
		start: new Date("2019-07-10T08:00:00.000Z"),
		end: new Date("2019-07-10T09:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548647.doc",
		id : 2080790,
		title: "ישיבת מליאה",
		start: new Date("2019-06-05T08:00:00.000Z"),
		end: new Date("2019-06-05T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548517.doc",
		id : 2080788,
		title: "ישיבת מליאה",
		start: new Date("2019-06-04T13:00:00.000Z"),
		end: new Date("2019-06-04T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548446.doc",
		id : 2080764,
		title: "ישיבת מליאה",
		start: new Date("2019-06-03T14:00:00.000Z"),
		end: new Date("2019-06-03T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_548426.doc",
		id : 2080761,
		title: "ישיבת מליאה",
		start: new Date("2019-06-03T11:00:00.000Z"),
		end: new Date("2019-06-03T12:20:00.000Z"),
		"IsSpecialMeeting" : 1
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_547647.doc",
		id : 2080359,
		title: "ישיבת מליאה",
		start: new Date("2019-05-22T08:00:00.000Z"),
		end: new Date("2019-05-22T09:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518806.doc",
		id : 2074889,
		title: "ישיבת מליאה",
		start: new Date("2018-10-29T14:00:00.000Z"),
		end: new Date("2018-10-29T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518576.doc",
		id : 2074560,
		title: "ישיבת מליאה",
		start: new Date("2018-10-24T08:00:00.000Z"),
		end: new Date("2018-10-24T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518455.doc",
		id : 2074559,
		title: "ישיבת מליאה",
		start: new Date("2018-10-23T13:00:00.000Z"),
		end: new Date("2018-10-23T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_546512.doc",
		id : 2078474,
		title: "ישיבת מליאה",
		start: new Date("2019-02-18T10:00:00.000Z"),
		end: new Date("2019-02-18T10:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_527070.doc",
		id : 2077085,
		title: "ישיבת מליאה",
		start: new Date("2018-12-19T09:00:00.000Z"),
		end: new Date("2018-12-19T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_520166.doc",
		id : 2075874,
		title: "ישיבת מליאה",
		start: new Date("2018-11-20T14:00:00.000Z"),
		end: new Date("2018-11-20T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_519390.doc",
		id : 2075134,
		title: "ישיבת מליאה",
		start: new Date("2018-11-07T09:00:00.000Z"),
		end: new Date("2018-11-07T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518923.doc",
		id : 2074891,
		title: "ישיבת מליאה",
		start: new Date("2018-10-31T09:00:00.000Z"),
		end: new Date("2018-10-31T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_503208.doc",
		id : 2072767,
		title: "ישיבת מליאה",
		start: new Date("2018-07-11T08:00:00.000Z"),
		end: new Date("2018-07-11T19:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_518033.doc",
		id : 2073991,
		title: "ישיבת מליאה",
		start: new Date("2018-10-16T13:00:00.000Z"),
		end: new Date("2018-10-16T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_517999.doc",
		id : 2073990,
		title: "ישיבת מליאה",
		start: new Date("2018-10-15T13:00:00.000Z"),
		end: new Date("2018-10-15T20:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_546678.doc",
		id : 2079620,
		title: "ישיבת מליאה",
		start: new Date("2019-05-06T13:00:00.000Z"),
		end: new Date("2019-05-06T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_502983.doc",
		id : 2072766,
		title: "ישיבת מליאה",
		start: new Date("2018-07-10T13:00:00.000Z"),
		end: new Date("2018-07-10T17:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_502471.doc",
		id : 2072378,
		title: "ישיבת מליאה",
		start: new Date("2018-07-04T08:00:00.000Z"),
		end: new Date("2018-07-04T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_502293.doc",
		id : 2072377,
		title: "ישיבת מליאה",
		start: new Date("2018-07-03T13:00:00.000Z"),
		end: new Date("2018-07-03T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_502262.doc",
		id : 2072376,
		title: "ישיבת מליאה",
		start: new Date("2018-07-02T13:00:00.000Z"),
		end: new Date("2018-07-03T00:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_503628.doc",
		id : 2073132,
		title: "ישיבת מליאה",
		start: new Date("2018-07-16T13:00:00.000Z"),
		end: new Date("2018-07-17T04:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_501789.doc",
		id : 2071975,
		title: "ישיבת מליאה",
		start: new Date("2018-06-27T08:00:00.000Z"),
		end: new Date("2018-06-27T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_501587.doc",
		id : 2071973,
		title: "ישיבת מליאה",
		start: new Date("2018-06-25T13:00:00.000Z"),
		end: new Date("2018-06-25T19:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_501173.doc",
		id : 2071519,
		title: "ישיבת מליאה",
		start: new Date("2018-06-20T08:00:00.000Z"),
		end: new Date("2018-06-20T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_500586.doc",
		id : 2071140,
		title: "ישיבת מליאה",
		start: new Date("2018-06-13T08:00:00.000Z"),
		end: new Date("2018-06-13T14:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_500433.doc",
		id : 2071139,
		title: "ישיבת מליאה",
		start: new Date("2018-06-12T13:00:00.000Z"),
		end: new Date("2018-06-12T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_499310.doc",
		id : 2070309,
		title: "ישיבת מליאה",
		start: new Date("2018-05-30T08:00:00.000Z"),
		end: new Date("2018-05-30T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_499148.doc",
		id : 2070308,
		title: "ישיבת מליאה",
		start: new Date("2018-05-29T13:00:00.000Z"),
		end: new Date("2018-05-29T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_499059.doc",
		id : 2070307,
		title: "ישיבת מליאה",
		start: new Date("2018-05-28T13:00:00.000Z"),
		end: new Date("2018-05-28T18:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_499701.doc",
		id : 2070748,
		title: "ישיבת מליאה",
		start: new Date("2018-06-05T13:00:00.000Z"),
		end: new Date("2018-06-05T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_498693.doc",
		id : 2069907,
		title: "ישיבת מליאה",
		start: new Date("2018-05-23T08:00:00.000Z"),
		end: new Date("2018-05-23T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_498536.doc",
		id : 2069906,
		title: "ישיבת מליאה",
		start: new Date("2018-05-22T13:00:00.000Z"),
		end: new Date("2018-05-22T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_501626.doc",
		id : 2071974,
		title: "ישיבת מליאה",
		start: new Date("2018-06-26T13:00:00.000Z"),
		end: new Date("2018-06-26T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_492994.doc",
		id : 2067909,
		title: "ישיבת מליאה",
		start: new Date("2018-05-02T08:00:00.000Z"),
		end: new Date("2018-05-02T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_546665.doc",
		id : 2078587,
		title: "ישיבת מליאה",
		start: new Date("2019-04-30T14:00:00.000Z"),
		end: new Date("2019-04-30T14:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/21\/Plenum\/21_ptm_546664.doc",
		id : 2078584,
		title: "ישיבת מליאה",
		start: new Date("2019-04-30T13:00:00.000Z"),
		end: new Date("2019-04-30T13:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_491263.doc",
		id : 2066727,
		title: "ישיבת מליאה",
		start: new Date("2018-03-12T14:00:00.000Z"),
		end: new Date("2018-03-12T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_493532.doc",
		id : 2068522,
		title: "ישיבת מליאה",
		start: new Date("2018-05-09T08:00:00.000Z"),
		end: new Date("2018-05-09T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_493351.doc",
		id : 2068520,
		title: "ישיבת מליאה",
		start: new Date("2018-05-07T13:00:00.000Z"),
		end: new Date("2018-05-07T18:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_493884.doc",
		id : 2068988,
		title: "ישיבת מליאה",
		start: new Date("2018-05-14T13:00:00.000Z"),
		end: new Date("2018-05-14T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_490700.doc",
		id : 2066320,
		title: "ישיבת מליאה",
		start: new Date("2018-03-06T14:00:00.000Z"),
		end: new Date("2018-03-06T18:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_490569.doc",
		id : 2066319,
		title: "ישיבת מליאה",
		start: new Date("2018-03-05T14:00:00.000Z"),
		end: new Date("2018-03-05T20:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323423.doc",
		id : 574940,
		title: "ישיבת מליאה",
		start: new Date("2016-01-27T09:00:00.000Z"),
		end: new Date("2016-01-27T17:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321416.doc",
		id : 574939,
		title: "ישיבת מליאה",
		start: new Date("2016-01-26T14:00:00.000Z"),
		end: new Date("2016-01-26T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323422.doc",
		id : 574938,
		title: "ישיבת מליאה",
		start: new Date("2016-01-25T14:00:00.000Z"),
		end: new Date("2016-01-25T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_490198.doc",
		id : 2065555,
		title: "ישיבת מליאה",
		start: new Date("2018-02-28T09:00:00.000Z"),
		end: new Date("2018-02-28T12:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_490073.doc",
		id : 2065554,
		title: "ישיבת מליאה",
		start: new Date("2018-02-27T14:00:00.000Z"),
		end: new Date("2018-02-27T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_490016.doc",
		id : 2065553,
		title: "ישיבת מליאה",
		start: new Date("2018-02-26T14:00:00.000Z"),
		end: new Date("2018-02-26T20:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_489609.doc",
		id : 2065377,
		title: "ישיבת מליאה",
		start: new Date("2018-02-21T09:00:00.000Z"),
		end: new Date("2018-02-21T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_489520.doc",
		id : 2065376,
		title: "ישיבת מליאה",
		start: new Date("2018-02-20T14:00:00.000Z"),
		end: new Date("2018-02-20T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488982.doc",
		id : 2064932,
		title: "ישיבת מליאה",
		start: new Date("2018-02-14T09:00:00.000Z"),
		end: new Date("2018-02-14T12:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488783.doc",
		id : 2064930,
		title: "ישיבת מליאה",
		start: new Date("2018-02-12T14:00:00.000Z"),
		end: new Date("2018-02-12T23:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488380.doc",
		id : 2064527,
		title: "ישיבת מליאה",
		start: new Date("2018-02-07T09:00:00.000Z"),
		end: new Date("2018-02-07T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488235.doc",
		id : 2064526,
		title: "ישיבת מליאה",
		start: new Date("2018-02-06T14:00:00.000Z"),
		end: new Date("2018-02-06T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488166.doc",
		id : 2064524,
		title: "ישיבת מליאה",
		start: new Date("2018-02-05T14:00:00.000Z"),
		end: new Date("2018-02-05T18:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_487941.doc",
		id : 2064072,
		title: "ישיבת מליאה",
		start: new Date("2018-01-31T09:00:00.000Z"),
		end: new Date("2018-01-31T18:48:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_487705.doc",
		id : 2064071,
		title: "ישיבת מליאה",
		start: new Date("2018-01-30T14:00:00.000Z"),
		end: new Date("2018-01-30T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_487236.doc",
		id : 2063780,
		title: "ישיבת מליאה",
		start: new Date("2018-01-24T09:00:00.000Z"),
		end: new Date("2018-01-24T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_487089.doc",
		id : 2063779,
		title: "ישיבת מליאה",
		start: new Date("2018-01-23T14:00:00.000Z"),
		end: new Date("2018-01-23T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_486959.doc",
		id : 2063778,
		title: "ישיבת מליאה",
		start: new Date("2018-01-22T12:00:00.000Z"),
		end: new Date("2018-01-22T17:49:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_493975.doc",
		id : 2068989,
		title: "ישיבת מליאה",
		start: new Date("2018-05-15T13:00:00.000Z"),
		end: new Date("2018-05-15T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_492865.doc",
		id : 2067908,
		title: "ישיבת מליאה",
		start: new Date("2018-05-01T13:00:00.000Z"),
		end: new Date("2018-05-01T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_466002.doc",
		id : 2063488,
		title: "ישיבת מליאה",
		start: new Date("2018-01-17T09:00:00.000Z"),
		end: new Date("2018-01-17T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_487658.doc",
		id : 2064070,
		title: "ישיבת מליאה",
		start: new Date("2018-01-29T14:00:00.000Z"),
		end: new Date("2018-01-29T23:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_419610.doc",
		id : 2063236,
		title: "ישיבת מליאה",
		start: new Date("2018-01-09T14:00:00.000Z"),
		end: new Date("2018-01-09T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_463560.doc",
		id : 2063487,
		title: "ישיבת מליאה",
		start: new Date("2018-01-16T14:00:00.000Z"),
		end: new Date("2018-01-16T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_396195.doc",
		id : 2024451,
		title: "ישיבת מליאה",
		start: new Date("2017-12-20T09:00:00.000Z"),
		end: new Date("2017-12-20T17:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_396009.doc",
		id : 2024450,
		title: "ישיבת מליאה",
		start: new Date("2017-12-19T11:00:00.000Z"),
		end: new Date("2017-12-19T12:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_395601.doc",
		id : 2024257,
		title: "ישיבת מליאה",
		start: new Date("2017-12-12T11:00:00.000Z"),
		end: new Date("2017-12-12T12:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_395598.doc",
		id : 2024256,
		title: "ישיבת מליאה",
		start: new Date("2017-12-11T14:00:00.000Z"),
		end: new Date("2017-12-12T03:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_395072.doc",
		id : 2023935,
		title: "ישיבת מליאה",
		start: new Date("2017-12-05T14:00:00.000Z"),
		end: new Date("2017-12-05T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_394964.doc",
		id : 2023934,
		title: "ישיבת מליאה",
		start: new Date("2017-12-04T14:00:00.000Z"),
		end: new Date("2017-12-04T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_394541.doc",
		id : 2023534,
		title: "ישיבת מליאה",
		start: new Date("2017-11-28T14:00:00.000Z"),
		end: new Date("2017-11-28T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_393359.doc",
		id : 2022938,
		title: "ישיבת מליאה",
		start: new Date("2017-11-14T14:00:00.000Z"),
		end: new Date("2017-11-14T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_393260.doc",
		id : 2022937,
		title: "ישיבת מליאה",
		start: new Date("2017-11-13T14:00:00.000Z"),
		end: new Date("2017-11-13T19:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392831.doc",
		id : 2022526,
		title: "ישיבת מליאה",
		start: new Date("2017-11-07T14:00:00.000Z"),
		end: new Date("2017-11-07T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_381662.doc",
		id : 2015825,
		title: "ישיבת מליאה",
		start: new Date("2017-03-20T14:00:00.000Z"),
		end: new Date("2017-03-20T22:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_385541.doc",
		id : 2017746,
		title: "ישיבת מליאה",
		start: new Date("2017-06-07T08:00:00.000Z"),
		end: new Date("2017-06-07T11:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_368467.doc",
		id : 2013645,
		title: "ישיבת מליאה",
		start: new Date("2017-02-08T09:00:00.000Z"),
		end: new Date("2017-02-08T17:12:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392252.doc",
		id : 2022057,
		title: "ישיבת מליאה",
		start: new Date("2017-10-31T14:00:00.000Z"),
		end: new Date("2017-10-31T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392131.doc",
		id : 2022056,
		title: "ישיבת מליאה",
		start: new Date("2017-10-30T14:00:00.000Z"),
		end: new Date("2017-10-30T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_389682.doc",
		id : 2020438,
		title: "ישיבת מליאה",
		start: new Date("2017-07-24T13:00:00.000Z"),
		end: new Date("2017-07-24T20:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_390032.doc",
		id : 2020440,
		title: "ישיבת מליאה",
		start: new Date("2017-07-26T08:00:00.000Z"),
		end: new Date("2017-07-26T19:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_389732.doc",
		id : 2020439,
		title: "ישיבת מליאה",
		start: new Date("2017-07-25T13:00:00.000Z"),
		end: new Date("2017-07-25T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_391087.doc",
		id : 2021325,
		title: "ישיבת מליאה",
		start: new Date("2017-09-27T08:00:00.000Z"),
		end: new Date("2017-09-27T08:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_390969.doc",
		id : 2021180,
		title: "ישיבת מליאה",
		start: new Date("2017-09-18T08:00:00.000Z"),
		end: new Date("2017-09-18T10:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_390254.doc",
		id : 2020801,
		title: "ישיבת מליאה",
		start: new Date("2017-08-02T09:00:00.000Z"),
		end: new Date("2017-08-02T09:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_388049.doc",
		id : 2019227,
		title: "ישיבת מליאה",
		start: new Date("2017-07-05T08:00:00.000Z"),
		end: new Date("2017-07-05T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_387849.doc",
		id : 2019226,
		title: "ישיבת מליאה",
		start: new Date("2017-07-04T13:00:00.000Z"),
		end: new Date("2017-07-04T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_387750.doc",
		id : 2019225,
		title: "ישיבת מליאה",
		start: new Date("2017-07-03T13:00:00.000Z"),
		end: new Date("2017-07-03T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_387471.doc",
		id : 2018855,
		title: "ישיבת מליאה",
		start: new Date("2017-06-28T08:00:00.000Z"),
		end: new Date("2017-06-28T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_387370.doc",
		id : 2018854,
		title: "ישיבת מליאה",
		start: new Date("2017-06-27T13:00:00.000Z"),
		end: new Date("2017-06-27T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_387292.doc",
		id : 2018853,
		title: "ישיבת מליאה",
		start: new Date("2017-06-26T13:00:00.000Z"),
		end: new Date("2017-06-26T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_388565.doc",
		id : 2019613,
		title: "ישיבת מליאה",
		start: new Date("2017-07-11T13:00:00.000Z"),
		end: new Date("2017-07-11T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_389361.doc",
		id : 2020034,
		title: "ישיבת מליאה",
		start: new Date("2017-07-19T08:00:00.000Z"),
		end: new Date("2017-07-19T18:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_389175.doc",
		id : 2020033,
		title: "ישיבת מליאה",
		start: new Date("2017-07-18T13:00:00.000Z"),
		end: new Date("2017-07-18T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_389116.doc",
		id : 2020032,
		title: "ישיבת מליאה",
		start: new Date("2017-07-17T13:00:00.000Z"),
		end: new Date("2017-07-17T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_388702.doc",
		id : 2019614,
		title: "ישיבת מליאה",
		start: new Date("2017-07-12T08:00:00.000Z"),
		end: new Date("2017-07-12T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_388438.doc",
		id : 2019612,
		title: "ישיבת מליאה",
		start: new Date("2017-07-10T13:00:00.000Z"),
		end: new Date("2017-07-10T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_391808.doc",
		id : 2020739,
		title: "ישיבת מליאה",
		start: new Date("2017-10-25T08:00:00.000Z"),
		end: new Date("2017-10-25T14:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_386955.doc",
		id : 2018456,
		title: "ישיבת מליאה",
		start: new Date("2017-06-21T08:00:00.000Z"),
		end: new Date("2017-06-21T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_386737.doc",
		id : 2018455,
		title: "ישיבת מליאה",
		start: new Date("2017-06-20T13:00:00.000Z"),
		end: new Date("2017-06-20T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_386606.doc",
		id : 2018454,
		title: "ישיבת מליאה",
		start: new Date("2017-06-19T13:00:00.000Z"),
		end: new Date("2017-06-19T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_386110.doc",
		id : 2018067,
		title: "ישיבת מליאה",
		start: new Date("2017-06-14T08:00:00.000Z"),
		end: new Date("2017-06-14T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_386005.doc",
		id : 2018066,
		title: "ישיבת מליאה",
		start: new Date("2017-06-13T13:00:00.000Z"),
		end: new Date("2017-06-13T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_385895.doc",
		id : 2018065,
		title: "ישיבת מליאה",
		start: new Date("2017-06-12T13:00:00.000Z"),
		end: new Date("2017-06-12T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_384869.doc",
		id : 2017310,
		title: "ישיבת מליאה",
		start: new Date("2017-05-24T08:00:00.000Z"),
		end: new Date("2017-05-24T13:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_370651.doc",
		id : 2015192,
		title: "ישיבת מליאה",
		start: new Date("2017-03-06T14:00:00.000Z"),
		end: new Date("2017-03-06T20:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_385349.doc",
		id : 2017744,
		title: "ישיבת מליאה",
		start: new Date("2017-06-05T13:00:00.000Z"),
		end: new Date("2017-06-05T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_383385.doc",
		id : 2016213,
		title: "ישיבת מליאה",
		start: new Date("2017-05-09T13:00:00.000Z"),
		end: new Date("2017-05-09T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_383324.doc",
		id : 2016212,
		title: "ישיבת מליאה",
		start: new Date("2017-05-08T13:00:00.000Z"),
		end: new Date("2017-05-08T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_385429.doc",
		id : 2017745,
		title: "ישיבת מליאה",
		start: new Date("2017-06-06T13:00:00.000Z"),
		end: new Date("2017-06-06T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_385096.doc",
		id : 2017582,
		title: "ישיבת מליאה",
		start: new Date("2017-05-29T13:00:00.000Z"),
		end: new Date("2017-05-29T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_382661.doc",
		id : 2016331,
		title: "ישיבת מליאה",
		start: new Date("2017-04-25T08:00:00.000Z"),
		end: new Date("2017-04-25T13:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_381742.doc",
		id : 2015826,
		title: "ישיבת מליאה",
		start: new Date("2017-03-21T14:00:00.000Z"),
		end: new Date("2017-03-21T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_383883.doc",
		id : 2016937,
		title: "ישיבת מליאה",
		start: new Date("2017-05-15T13:00:00.000Z"),
		end: new Date("2017-05-15T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_382378.doc",
		id : 2016184,
		title: "ישיבת מליאה",
		start: new Date("2017-04-05T08:00:00.000Z"),
		end: new Date("2017-04-05T14:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_382021.doc",
		id : 2015827,
		title: "ישיבת מליאה",
		start: new Date("2017-03-22T09:00:00.000Z"),
		end: new Date("2017-03-22T17:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_381374.doc",
		id : 2015470,
		title: "ישיבת מליאה",
		start: new Date("2017-03-14T14:00:00.000Z"),
		end: new Date("2017-03-14T21:58:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_369915.doc",
		id : 2014799,
		title: "ישיבת מליאה",
		start: new Date("2017-03-01T09:00:00.000Z"),
		end: new Date("2017-03-01T16:02:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_369670.doc",
		id : 2014790,
		title: "ישיבת מליאה",
		start: new Date("2017-02-27T14:00:00.000Z"),
		end: new Date("2017-02-27T20:04:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_370937.doc",
		id : 2015221,
		title: "ישיבת מליאה",
		start: new Date("2017-03-08T09:00:00.000Z"),
		end: new Date("2017-03-08T17:49:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_370654.doc",
		id : 2015193,
		title: "ישיבת מליאה",
		start: new Date("2017-03-07T14:00:00.000Z"),
		end: new Date("2017-03-07T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_369227.doc",
		id : 2014403,
		title: "ישיבת מליאה",
		start: new Date("2017-02-21T14:00:00.000Z"),
		end: new Date("2017-02-21T17:14:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_368840.doc",
		id : 2014091,
		title: "ישיבת מליאה",
		start: new Date("2017-02-15T09:00:00.000Z"),
		end: new Date("2017-02-15T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_368854.doc",
		id : 2014090,
		title: "ישיבת מליאה",
		start: new Date("2017-02-14T14:00:00.000Z"),
		end: new Date("2017-02-14T14:49:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_368848.doc",
		id : 2014089,
		title: "ישיבת מליאה",
		start: new Date("2017-02-13T14:00:00.000Z"),
		end: new Date("2017-02-13T19:52:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_381375.doc",
		id : 2015471,
		title: "ישיבת מליאה",
		start: new Date("2017-03-15T09:00:00.000Z"),
		end: new Date("2017-03-15T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_368257.doc",
		id : 2013643,
		title: "ישיבת מליאה",
		start: new Date("2017-02-06T14:00:00.000Z"),
		end: new Date("2017-02-06T20:57:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_367940.doc",
		id : 2013231,
		title: "ישיבת מליאה",
		start: new Date("2017-02-01T09:00:00.000Z"),
		end: new Date("2017-02-01T14:32:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_367819.doc",
		id : 2013229,
		title: "ישיבת מליאה",
		start: new Date("2017-01-30T14:00:00.000Z"),
		end: new Date("2017-01-30T19:29:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_367515.doc",
		id : 2012795,
		title: "ישיבת מליאה",
		start: new Date("2017-01-25T09:00:00.000Z"),
		end: new Date("2017-01-25T15:24:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_367301.doc",
		id : 2012794,
		title: "ישיבת מליאה",
		start: new Date("2017-01-24T14:00:00.000Z"),
		end: new Date("2017-01-24T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_367194.doc",
		id : 2012793,
		title: "ישיבת מליאה",
		start: new Date("2017-01-23T14:00:00.000Z"),
		end: new Date("2017-01-23T19:01:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_366888.doc",
		id : 2012371,
		title: "ישיבת מליאה",
		start: new Date("2017-01-18T09:00:00.000Z"),
		end: new Date("2017-01-18T14:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_366758.doc",
		id : 2012369,
		title: "ישיבת מליאה",
		start: new Date("2017-01-16T14:00:00.000Z"),
		end: new Date("2017-01-16T20:57:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365869.doc",
		id : 2011635,
		title: "ישיבת מליאה",
		start: new Date("2017-01-02T14:00:00.000Z"),
		end: new Date("2017-01-03T07:08:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_488533.doc",
		id : 2065259,
		title: "ישיבת מליאה",
		start: new Date("2018-02-11T10:00:00.000Z"),
		end: new Date("2018-02-11T10:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365435.doc",
		id : 2011285,
		title: "ישיבת מליאה",
		start: new Date("2016-12-28T09:00:00.000Z"),
		end: new Date("2016-12-28T12:54:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365289.doc",
		id : 2011283,
		title: "ישיבת מליאה",
		start: new Date("2016-12-26T11:00:00.000Z"),
		end: new Date("2016-12-26T13:31:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365021.doc",
		id : 2011074,
		title: "ישיבת מליאה",
		start: new Date("2016-12-21T07:00:00.000Z"),
		end: new Date("2016-12-21T23:15:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_364824.doc",
		id : 2011073,
		title: "ישיבת מליאה",
		start: new Date("2016-12-20T14:00:00.000Z"),
		end: new Date("2016-12-20T21:17:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_364576.doc",
		id : 2010982,
		title: "ישיבת מליאה",
		start: new Date("2016-12-19T14:00:00.000Z"),
		end: new Date("2016-12-19T18:38:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_384370.doc",
		id : 2016939,
		title: "ישיבת מליאה",
		start: new Date("2017-05-17T08:00:00.000Z"),
		end: new Date("2017-05-17T14:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_342899.doc",
		id : 2003370,
		title: "ישיבת מליאה",
		start: new Date("2016-06-08T08:00:00.000Z"),
		end: new Date("2016-06-08T15:28:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_367860.doc",
		id : 2013230,
		title: "ישיבת מליאה",
		start: new Date("2017-01-31T14:00:00.000Z"),
		end: new Date("2017-01-31T15:13:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361960.doc",
		id : 2008786,
		title: "ישיבת מליאה",
		start: new Date("2016-11-16T09:00:00.000Z"),
		end: new Date("2016-11-16T14:39:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_364266.doc",
		id : 2010504,
		title: "ישיבת מליאה",
		start: new Date("2016-12-13T14:00:00.000Z"),
		end: new Date("2016-12-13T16:47:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_364219.doc",
		id : 2010503,
		title: "ישיבת מליאה",
		start: new Date("2016-12-12T14:00:00.000Z"),
		end: new Date("2016-12-12T20:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_366786.doc",
		id : 2012370,
		title: "ישיבת מליאה",
		start: new Date("2017-01-17T14:00:00.000Z"),
		end: new Date("2017-01-17T15:09:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_366356.doc",
		id : 2011995,
		title: "ישיבת מליאה",
		start: new Date("2017-01-11T09:00:00.000Z"),
		end: new Date("2017-01-11T12:42:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_366223.doc",
		id : 2011993,
		title: "ישיבת מליאה",
		start: new Date("2017-01-09T14:00:00.000Z"),
		end: new Date("2017-01-09T17:37:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365922.doc",
		id : 2011637,
		title: "ישיבת מליאה",
		start: new Date("2017-01-04T09:00:00.000Z"),
		end: new Date("2017-01-04T16:35:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_363580.doc",
		id : 2010062,
		title: "ישיבת מליאה",
		start: new Date("2016-12-05T14:00:00.000Z"),
		end: new Date("2016-12-05T19:37:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_363835.doc",
		id : 2010064,
		title: "ישיבת מליאה",
		start: new Date("2016-12-07T09:00:00.000Z"),
		end: new Date("2016-12-07T19:56:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_366257.doc",
		id : 2011994,
		title: "ישיבת מליאה",
		start: new Date("2017-01-10T14:00:00.000Z"),
		end: new Date("2017-01-10T15:53:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365777.doc",
		id : 2011636,
		title: "ישיבת מליאה",
		start: new Date("2017-01-03T14:00:00.000Z"),
		end: new Date("2017-01-03T15:56:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365345.doc",
		id : 2011284,
		title: "ישיבת מליאה",
		start: new Date("2016-12-27T11:00:00.000Z"),
		end: new Date("2016-12-27T12:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_384868.doc",
		id : 2017309,
		title: "ישיבת מליאה",
		start: new Date("2017-05-23T13:00:00.000Z"),
		end: new Date("2017-05-23T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_384371.doc",
		id : 2017308,
		title: "ישיבת מליאה",
		start: new Date("2017-05-22T13:00:00.000Z"),
		end: new Date("2017-05-22T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_363197.doc",
		id : 2009661,
		title: "ישיבת מליאה",
		start: new Date("2016-11-30T09:00:00.000Z"),
		end: new Date("2016-11-30T15:16:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_363069.doc",
		id : 2009660,
		title: "ישיבת מליאה",
		start: new Date("2016-11-29T14:00:00.000Z"),
		end: new Date("2016-11-29T16:36:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_364438.doc",
		id : 2010505,
		title: "ישיבת מליאה",
		start: new Date("2016-12-14T09:00:00.000Z"),
		end: new Date("2016-12-14T16:21:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_363630.doc",
		id : 2010063,
		title: "ישיבת מליאה",
		start: new Date("2016-12-06T14:00:00.000Z"),
		end: new Date("2016-12-06T15:42:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_362720.doc",
		id : 2009328,
		title: "ישיבת מליאה",
		start: new Date("2016-11-23T09:00:00.000Z"),
		end: new Date("2016-11-23T15:59:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_362472.doc",
		id : 2009306,
		title: "ישיבת מליאה",
		start: new Date("2016-11-21T14:00:00.000Z"),
		end: new Date("2016-11-21T20:41:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361865.doc",
		id : 2008785,
		title: "ישיבת מליאה",
		start: new Date("2016-11-15T14:00:00.000Z"),
		end: new Date("2016-11-15T16:34:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361774.doc",
		id : 2008784,
		title: "ישיבת מליאה",
		start: new Date("2016-11-14T14:00:00.000Z"),
		end: new Date("2016-11-14T19:25:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361469.doc",
		id : 2008286,
		title: "ישיבת מליאה",
		start: new Date("2016-11-09T09:00:00.000Z"),
		end: new Date("2016-11-09T15:44:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361283.doc",
		id : 2008282,
		title: "ישיבת מליאה",
		start: new Date("2016-11-07T14:00:00.000Z"),
		end: new Date("2016-11-07T22:03:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_382983.doc",
		id : 2016542,
		title: "ישיבת מליאה",
		start: new Date("2017-05-04T15:00:00.000Z"),
		end: new Date("2017-05-04T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_382982.doc",
		id : 2016540,
		title: "ישיבת מליאה",
		start: new Date("2017-05-03T17:00:00.000Z"),
		end: new Date("2017-05-03T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_363012.doc",
		id : 2009659,
		title: "ישיבת מליאה",
		start: new Date("2016-11-28T14:00:00.000Z"),
		end: new Date("2016-11-28T18:04:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_360958.doc",
		id : 2007253,
		title: "ישיבת מליאה",
		start: new Date("2016-11-02T09:00:00.000Z"),
		end: new Date("2016-11-02T21:01:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_350710.doc",
		id : 2007251,
		title: "ישיבת מליאה",
		start: new Date("2016-10-31T14:00:00.000Z"),
		end: new Date("2016-10-31T17:42:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_369750.doc",
		id : 2014798,
		title: "ישיבת מליאה",
		start: new Date("2017-02-28T14:00:00.000Z"),
		end: new Date("2017-02-28T16:01:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_346273.doc",
		id : 2005936,
		title: "ישיבת מליאה",
		start: new Date("2016-07-20T08:00:00.000Z"),
		end: new Date("2016-07-20T15:29:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_348237.doc",
		id : 2006754,
		title: "ישיבת מליאה",
		start: new Date("2016-08-03T08:00:00.000Z"),
		end: new Date("2016-08-04T01:08:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_348112.doc",
		id : 2006753,
		title: "ישיבת מליאה",
		start: new Date("2016-08-02T10:00:00.000Z"),
		end: new Date("2016-08-02T20:13:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_347900.doc",
		id : 2006752,
		title: "ישיבת מליאה",
		start: new Date("2016-08-01T13:00:00.000Z"),
		end: new Date("2016-08-02T01:45:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_392402.doc",
		id : 2022058,
		title: "ישיבת מליאה",
		start: new Date("2017-11-01T09:00:00.000Z"),
		end: new Date("2017-11-01T11:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_347064.doc",
		id : 2006409,
		title: "ישיבת מליאה",
		start: new Date("2016-07-27T08:00:00.000Z"),
		end: new Date("2016-07-27T15:44:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_346906.doc",
		id : 2006408,
		title: "ישיבת מליאה",
		start: new Date("2016-07-26T13:00:00.000Z"),
		end: new Date("2016-07-26T15:51:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_346860.doc",
		id : 2006407,
		title: "ישיבת מליאה",
		start: new Date("2016-07-25T13:00:00.000Z"),
		end: new Date("2016-07-25T23:05:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_346239.doc",
		id : 2005935,
		title: "ישיבת מליאה",
		start: new Date("2016-07-19T13:00:00.000Z"),
		end: new Date("2016-07-19T22:58:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_346057.doc",
		id : 2005934,
		title: "ישיבת מליאה",
		start: new Date("2016-07-18T13:00:00.000Z"),
		end: new Date("2016-07-18T19:52:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_345555.doc",
		id : 2005477,
		title: "ישיבת מליאה",
		start: new Date("2016-07-13T08:00:00.000Z"),
		end: new Date("2016-07-13T15:45:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_345444.doc",
		id : 2005474,
		title: "ישיבת מליאה",
		start: new Date("2016-07-12T13:00:00.000Z"),
		end: new Date("2016-07-12T18:56:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_345305.doc",
		id : 2005473,
		title: "ישיבת מליאה",
		start: new Date("2016-07-11T13:00:00.000Z"),
		end: new Date("2016-07-11T21:02:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_344900.doc",
		id : 2005016,
		title: "ישיבת מליאה",
		start: new Date("2016-07-06T08:00:00.000Z"),
		end: new Date("2016-07-06T14:48:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_344669.doc",
		id : 2005012,
		title: "ישיבת מליאה",
		start: new Date("2016-07-04T13:00:00.000Z"),
		end: new Date("2016-07-04T15:53:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_368286.doc",
		id : 2013644,
		title: "ישיבת מליאה",
		start: new Date("2017-02-07T14:00:00.000Z"),
		end: new Date("2017-02-07T16:26:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_344365.doc",
		id : 2004528,
		title: "ישיבת מליאה",
		start: new Date("2016-06-29T08:00:00.000Z"),
		end: new Date("2016-06-29T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_344183.doc",
		id : 2004526,
		title: "ישיבת מליאה",
		start: new Date("2016-06-27T13:00:00.000Z"),
		end: new Date("2016-06-27T21:58:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_343830.doc",
		id : 2004148,
		title: "ישיבת מליאה",
		start: new Date("2016-06-22T08:00:00.000Z"),
		end: new Date("2016-06-22T15:16:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_343717.doc",
		id : 2004147,
		title: "ישיבת מליאה",
		start: new Date("2016-06-21T13:00:00.000Z"),
		end: new Date("2016-06-21T15:09:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_343594.doc",
		id : 2004146,
		title: "ישיבת מליאה",
		start: new Date("2016-06-20T13:00:00.000Z"),
		end: new Date("2016-06-20T14:34:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_343388.doc",
		id : 2003752,
		title: "ישיבת מליאה",
		start: new Date("2016-06-15T08:00:00.000Z"),
		end: new Date("2016-06-15T17:52:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_343226.doc",
		id : 2003751,
		title: "ישיבת מליאה",
		start: new Date("2016-06-14T13:00:00.000Z"),
		end: new Date("2016-06-14T15:36:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_343145.doc",
		id : 2003750,
		title: "ישיבת מליאה",
		start: new Date("2016-06-13T13:00:00.000Z"),
		end: new Date("2016-06-13T16:57:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_362502.doc",
		id : 2009326,
		title: "ישיבת מליאה",
		start: new Date("2016-11-22T14:00:00.000Z"),
		end: new Date("2016-11-22T16:59:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_342700.doc",
		id : 2003369,
		title: "ישיבת מליאה",
		start: new Date("2016-06-07T13:00:00.000Z"),
		end: new Date("2016-06-07T14:28:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_342618.doc",
		id : 2003368,
		title: "ישיבת מליאה",
		start: new Date("2016-06-06T13:00:00.000Z"),
		end: new Date("2016-06-06T14:53:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319619.doc",
		id : 574125,
		title: "ישיבת מליאה",
		start: new Date("2016-01-11T14:00:00.000Z"),
		end: new Date("2016-01-11T20:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315381.doc",
		id : 570517,
		title: "ישיבת מליאה",
		start: new Date("2015-11-02T14:00:00.000Z"),
		end: new Date("2015-11-02T22:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_349630.doc",
		id : 2007430,
		title: "ישיבת מליאה",
		start: new Date("2016-09-19T08:00:00.000Z"),
		end: new Date("2016-09-19T10:14:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_342373.doc",
		id : 2002968,
		title: "ישיבת מליאה",
		start: new Date("2016-06-01T08:00:00.000Z"),
		end: new Date("2016-06-01T14:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_342209.doc",
		id : 2002966,
		title: "ישיבת מליאה",
		start: new Date("2016-05-30T13:00:00.000Z"),
		end: new Date("2016-05-30T19:17:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322398.doc",
		id : 577054,
		title: "ישיבת מליאה",
		start: new Date("2016-02-29T14:00:00.000Z"),
		end: new Date("2016-02-29T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_341829.doc",
		id : 578964,
		title: "ישיבת מליאה",
		start: new Date("2016-05-25T08:00:00.000Z"),
		end: new Date("2016-05-25T14:21:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_341723.doc",
		id : 578963,
		title: "ישיבת מליאה",
		start: new Date("2016-05-24T13:00:00.000Z"),
		end: new Date("2016-05-24T14:48:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_341650.doc",
		id : 578962,
		title: "ישיבת מליאה",
		start: new Date("2016-05-23T13:00:00.000Z"),
		end: new Date("2016-05-23T17:55:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_324283.doc",
		id : 578760,
		title: "ישיבת מליאה",
		start: new Date("2016-03-30T08:00:00.000Z"),
		end: new Date("2016-03-30T11:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_317925.doc",
		id : 572669,
		title: "ישיבת מליאה",
		start: new Date("2015-12-15T14:00:00.000Z"),
		end: new Date("2015-12-15T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315840.doc",
		id : 570960,
		title: "ישיבת מליאה",
		start: new Date("2015-11-11T09:00:00.000Z"),
		end: new Date("2015-11-11T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311646.doc",
		id : 566999,
		title: "ישיבת מליאה",
		start: new Date("2015-07-08T08:00:00.000Z"),
		end: new Date("2015-07-08T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_365025.doc",
		id : 2011229,
		title: "ישיבת מליאה",
		start: new Date("2016-12-22T14:30:00.000Z"),
		end: new Date("2016-12-22T14:41:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_324163.doc",
		id : 578759,
		title: "ישיבת מליאה",
		start: new Date("2016-03-29T10:00:00.000Z"),
		end: new Date("2016-03-29T16:46:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_324115.doc",
		id : 578758,
		title: "ישיבת מליאה",
		start: new Date("2016-03-28T13:00:00.000Z"),
		end: new Date("2016-03-29T01:26:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323826.doc",
		id : 578439,
		title: "ישיבת מליאה",
		start: new Date("2016-03-23T09:00:00.000Z"),
		end: new Date("2016-03-23T12:46:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323740.doc",
		id : 578436,
		title: "ישיבת מליאה",
		start: new Date("2016-03-22T14:00:00.000Z"),
		end: new Date("2016-03-22T16:53:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323682.doc",
		id : 578432,
		title: "ישיבת מליאה",
		start: new Date("2016-03-21T14:00:00.000Z"),
		end: new Date("2016-03-21T19:32:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323458.doc",
		id : 578042,
		title: "ישיבת מליאה",
		start: new Date("2016-03-16T09:00:00.000Z"),
		end: new Date("2016-03-16T17:17:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323256.doc",
		id : 578040,
		title: "ישיבת מליאה",
		start: new Date("2016-03-14T14:00:00.000Z"),
		end: new Date("2016-03-14T20:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319797.doc",
		id : 574129,
		title: "ישיבת מליאה",
		start: new Date("2016-01-13T09:00:00.000Z"),
		end: new Date("2016-01-13T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307124.doc",
		id : 564209,
		title: "ישיבת מליאה",
		start: new Date("2015-05-13T08:00:00.000Z"),
		end: new Date("2015-05-13T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322995.doc",
		id : 577530,
		title: "ישיבת מליאה",
		start: new Date("2016-03-09T09:00:00.000Z"),
		end: new Date("2016-03-09T16:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321582.doc",
		id : 576316,
		title: "ישיבת מליאה",
		start: new Date("2016-02-15T14:00:00.000Z"),
		end: new Date("2016-02-15T18:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316068.doc",
		id : 571446,
		title: "ישיבת מליאה",
		start: new Date("2015-11-17T08:00:00.000Z"),
		end: new Date("2015-11-17T19:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322586.doc",
		id : 577056,
		title: "ישיבת מליאה",
		start: new Date("2016-03-02T09:00:00.000Z"),
		end: new Date("2016-03-02T17:03:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322486.doc",
		id : 577055,
		title: "ישיבת מליאה",
		start: new Date("2016-03-01T14:00:00.000Z"),
		end: new Date("2016-03-01T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322172.doc",
		id : 576671,
		title: "ישיבת מליאה",
		start: new Date("2016-02-24T09:00:00.000Z"),
		end: new Date("2016-02-24T16:27:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322083.doc",
		id : 576670,
		title: "ישיבת מליאה",
		start: new Date("2016-02-23T14:00:00.000Z"),
		end: new Date("2016-02-23T17:21:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322039.doc",
		id : 576669,
		title: "ישיבת מליאה",
		start: new Date("2016-02-22T14:00:00.000Z"),
		end: new Date("2016-02-22T21:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321779.doc",
		id : 576318,
		title: "ישיבת מליאה",
		start: new Date("2016-02-17T09:00:00.000Z"),
		end: new Date("2016-02-17T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321629.doc",
		id : 576317,
		title: "ישיבת מליאה",
		start: new Date("2016-02-16T14:00:00.000Z"),
		end: new Date("2016-02-16T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361611.doc",
		id : 2008782,
		title: "ישיבת מליאה",
		start: new Date("2016-11-13T15:00:00.000Z"),
		end: new Date("2016-11-13T16:16:00.000Z"),
		"IsSpecialMeeting" : 1
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_361305.doc",
		id : 2008285,
		title: "ישיבת מליאה",
		start: new Date("2016-11-08T14:00:00.000Z"),
		end: new Date("2016-11-08T15:46:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_350775.doc",
		id : 2007252,
		title: "ישיבת מליאה",
		start: new Date("2016-11-01T14:00:00.000Z"),
		end: new Date("2016-11-01T18:11:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321396.doc",
		id : 575809,
		title: "ישיבת מליאה",
		start: new Date("2016-02-10T09:00:00.000Z"),
		end: new Date("2016-02-10T19:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321200.doc",
		id : 575805,
		title: "ישיבת מליאה",
		start: new Date("2016-02-08T14:00:00.000Z"),
		end: new Date("2016-02-08T23:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_320769.doc",
		id : 575331,
		title: "ישיבת מליאה",
		start: new Date("2016-02-02T14:00:00.000Z"),
		end: new Date("2016-02-02T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_320737.doc",
		id : 575326,
		title: "ישיבת מליאה",
		start: new Date("2016-02-01T14:00:00.000Z"),
		end: new Date("2016-02-02T00:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_312927.doc",
		id : 567850,
		title: "ישיבת מליאה",
		start: new Date("2015-07-22T08:00:00.000Z"),
		end: new Date("2015-07-23T01:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_323328.doc",
		id : 578041,
		title: "ישיבת מליאה",
		start: new Date("2016-03-15T14:00:00.000Z"),
		end: new Date("2016-03-15T16:49:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319995.doc",
		id : 574569,
		title: "ישיבת מליאה",
		start: new Date("2016-01-18T14:00:00.000Z"),
		end: new Date("2016-01-18T18:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319710.doc",
		id : 574126,
		title: "ישיבת מליאה",
		start: new Date("2016-01-12T14:00:00.000Z"),
		end: new Date("2016-01-12T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319337.doc",
		id : 573790,
		title: "ישיבת מליאה",
		start: new Date("2016-01-06T09:00:00.000Z"),
		end: new Date("2016-01-06T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319239.doc",
		id : 573789,
		title: "ישיבת מליאה",
		start: new Date("2016-01-05T14:00:00.000Z"),
		end: new Date("2016-01-05T17:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_319196.doc",
		id : 573788,
		title: "ישיבת מליאה",
		start: new Date("2016-01-04T14:00:00.000Z"),
		end: new Date("2016-01-04T22:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318911.doc",
		id : 573349,
		title: "ישיבת מליאה",
		start: new Date("2015-12-30T09:00:00.000Z"),
		end: new Date("2015-12-30T17:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318767.doc",
		id : 573347,
		title: "ישיבת מליאה",
		start: new Date("2015-12-28T14:00:00.000Z"),
		end: new Date("2015-12-28T19:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318579.doc",
		id : 572987,
		title: "ישיבת מליאה",
		start: new Date("2015-12-23T09:00:00.000Z"),
		end: new Date("2015-12-24T03:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318040.doc",
		id : 572749,
		title: "ישיבת מליאה",
		start: new Date("2015-12-16T09:00:00.000Z"),
		end: new Date("2015-12-16T18:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308930.doc",
		id : 565658,
		title: "ישיבת מליאה",
		start: new Date("2015-06-10T08:00:00.000Z"),
		end: new Date("2015-06-10T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318410.doc",
		id : 572986,
		title: "ישיבת מליאה",
		start: new Date("2015-12-22T14:00:00.000Z"),
		end: new Date("2015-12-22T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318357.doc",
		id : 572985,
		title: "ישיבת מליאה",
		start: new Date("2015-12-21T14:00:00.000Z"),
		end: new Date("2015-12-21T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_306947.doc",
		id : 564207,
		title: "ישיבת מליאה",
		start: new Date("2015-05-11T13:00:00.000Z"),
		end: new Date("2015-05-11T22:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_317874.doc",
		id : 572668,
		title: "ישיבת מליאה",
		start: new Date("2015-12-14T14:00:00.000Z"),
		end: new Date("2015-12-14T21:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_317250.doc",
		id : 572355,
		title: "ישיבת מליאה",
		start: new Date("2015-12-09T09:00:00.000Z"),
		end: new Date("2015-12-09T12:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_317179.doc",
		id : 572354,
		title: "ישיבת מליאה",
		start: new Date("2015-12-08T11:00:00.000Z"),
		end: new Date("2015-12-08T12:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_317145.doc",
		id : 572353,
		title: "ישיבת מליאה",
		start: new Date("2015-12-07T11:00:00.000Z"),
		end: new Date("2015-12-07T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316975.doc",
		id : 571943,
		title: "ישיבת מליאה",
		start: new Date("2015-12-02T09:00:00.000Z"),
		end: new Date("2015-12-02T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313847.doc",
		id : 568713,
		title: "ישיבת מליאה",
		start: new Date("2015-09-02T09:00:00.000Z"),
		end: new Date("2015-09-03T00:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_312518.doc",
		id : 567848,
		title: "ישיבת מליאה",
		start: new Date("2015-07-20T13:00:00.000Z"),
		end: new Date("2015-07-20T21:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316885.doc",
		id : 571942,
		title: "ישיבת מליאה",
		start: new Date("2015-12-01T14:00:00.000Z"),
		end: new Date("2015-12-01T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316841.doc",
		id : 571941,
		title: "ישיבת מליאה",
		start: new Date("2015-11-30T14:00:00.000Z"),
		end: new Date("2015-11-30T22:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314434.doc",
		id : 568714,
		title: "ישיבת מליאה",
		start: new Date("2015-10-12T13:00:00.000Z"),
		end: new Date("2015-10-12T20:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_344760.doc",
		id : 2005015,
		title: "ישיבת מליאה",
		start: new Date("2016-07-05T13:00:00.000Z"),
		end: new Date("2016-07-05T16:15:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_344206.doc",
		id : 2004527,
		title: "ישיבת מליאה",
		start: new Date("2016-06-28T13:00:00.000Z"),
		end: new Date("2016-06-28T15:29:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313902.doc",
		id : 568982,
		title: "ישיבת מליאה",
		start: new Date("2015-09-07T07:00:00.000Z"),
		end: new Date("2015-09-07T13:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_312054.doc",
		id : 567441,
		title: "ישיבת מליאה",
		start: new Date("2015-07-15T08:00:00.000Z"),
		end: new Date("2015-07-15T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_309583.doc",
		id : 566196,
		title: "ישיבת מליאה",
		start: new Date("2015-06-22T13:00:00.000Z"),
		end: new Date("2015-06-22T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_320034.doc",
		id : 574570,
		title: "ישיבת מליאה",
		start: new Date("2016-01-19T14:00:00.000Z"),
		end: new Date("2016-01-19T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316495.doc",
		id : 571592,
		title: "ישיבת מליאה",
		start: new Date("2015-11-24T14:00:00.000Z"),
		end: new Date("2015-11-24T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316443.doc",
		id : 571591,
		title: "ישיבת מליאה",
		start: new Date("2015-11-23T14:00:00.000Z"),
		end: new Date("2015-11-23T23:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_309166.doc",
		id : 565839,
		title: "ישיבת מליאה",
		start: new Date("2015-06-15T13:00:00.000Z"),
		end: new Date("2015-06-15T21:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313191.doc",
		id : 568292,
		title: "ישיבת מליאה",
		start: new Date("2015-07-27T13:00:00.000Z"),
		end: new Date("2015-07-27T21:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311501.doc",
		id : 566995,
		title: "ישיבת מליאה",
		start: new Date("2015-07-06T13:00:00.000Z"),
		end: new Date("2015-07-07T01:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_309176.doc",
		id : 565843,
		title: "ישיבת מליאה",
		start: new Date("2015-06-16T13:00:00.000Z"),
		end: new Date("2015-06-16T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_320874.doc",
		id : 575332,
		title: "ישיבת מליאה",
		start: new Date("2016-02-03T09:00:00.000Z"),
		end: new Date("2016-02-03T17:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315053.doc",
		id : 570177,
		title: "ישיבת מליאה",
		start: new Date("2015-10-27T14:00:00.000Z"),
		end: new Date("2015-10-27T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311149.doc",
		id : 566598,
		title: "ישיבת מליאה",
		start: new Date("2015-07-01T08:00:00.000Z"),
		end: new Date("2015-07-01T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308848.doc",
		id : 565654,
		title: "ישיבת מליאה",
		start: new Date("2015-06-09T13:00:00.000Z"),
		end: new Date("2015-06-09T14:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314830.doc",
		id : 569833,
		title: "ישיבת מליאה",
		start: new Date("2015-10-21T08:00:00.000Z"),
		end: new Date("2015-10-21T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322906.doc",
		id : 577528,
		title: "ישיבת מליאה",
		start: new Date("2016-03-08T14:00:00.000Z"),
		end: new Date("2016-03-08T17:08:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308516.doc",
		id : 565168,
		title: "ישיבת מליאה",
		start: new Date("2015-06-03T08:00:00.000Z"),
		end: new Date("2015-06-03T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316234.doc",
		id : 571447,
		title: "ישיבת מליאה",
		start: new Date("2015-11-18T12:45:00.000Z"),
		end: new Date("2015-11-19T02:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_322852.doc",
		id : 577527,
		title: "ישיבת מליאה",
		start: new Date("2016-03-07T14:00:00.000Z"),
		end: new Date("2016-03-07T19:23:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315977.doc",
		id : 571306,
		title: "ישיבת מליאה",
		start: new Date("2015-11-16T08:00:00.000Z"),
		end: new Date("2015-11-16T18:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315141.doc",
		id : 570178,
		title: "ישיבת מליאה",
		start: new Date("2015-10-28T09:00:00.000Z"),
		end: new Date("2015-10-28T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_342251.doc",
		id : 2002967,
		title: "ישיבת מליאה",
		start: new Date("2016-05-31T13:00:00.000Z"),
		end: new Date("2016-05-31T14:32:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315503.doc",
		id : 570519,
		title: "ישיבת מליאה",
		start: new Date("2015-11-04T09:00:00.000Z"),
		end: new Date("2015-11-04T15:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308433.doc",
		id : 565256,
		title: "ישיבת מליאה",
		start: new Date("2015-06-02T13:00:00.000Z"),
		end: new Date("2015-06-02T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315776.doc",
		id : 570959,
		title: "ישיבת מליאה",
		start: new Date("2015-11-10T14:00:00.000Z"),
		end: new Date("2015-11-10T16:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315715.doc",
		id : 570958,
		title: "ישיבת מליאה",
		start: new Date("2015-11-09T14:00:00.000Z"),
		end: new Date("2015-11-09T16:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314741.doc",
		id : 569832,
		title: "ישיבת מליאה",
		start: new Date("2015-10-20T13:00:00.000Z"),
		end: new Date("2015-10-20T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315011.doc",
		id : 570176,
		title: "ישיבת מליאה",
		start: new Date("2015-10-26T15:00:00.000Z"),
		end: new Date("2015-10-26T17:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314703.doc",
		id : 569831,
		title: "ישיבת מליאה",
		start: new Date("2015-10-19T13:00:00.000Z"),
		end: new Date("2015-10-19T18:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311960.doc",
		id : 567440,
		title: "ישיבת מליאה",
		start: new Date("2015-07-14T13:00:00.000Z"),
		end: new Date("2015-07-14T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311928.doc",
		id : 567439,
		title: "ישיבת מליאה",
		start: new Date("2015-07-13T13:00:00.000Z"),
		end: new Date("2015-07-13T20:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314519.doc",
		id : 568716,
		title: "ישיבת מליאה",
		start: new Date("2015-10-14T08:00:00.000Z"),
		end: new Date("2015-10-14T14:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314458.doc",
		id : 568715,
		title: "ישיבת מליאה",
		start: new Date("2015-10-13T13:00:00.000Z"),
		end: new Date("2015-10-13T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313510.doc",
		id : 568294,
		title: "ישיבת מליאה",
		start: new Date("2015-07-29T08:00:00.000Z"),
		end: new Date("2015-07-30T03:16:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307106.doc",
		id : 564208,
		title: "ישיבת מליאה",
		start: new Date("2015-05-12T13:00:00.000Z"),
		end: new Date("2015-05-13T07:51:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_320125.doc",
		id : 574572,
		title: "ישיבת מליאה",
		start: new Date("2016-01-20T09:00:00.000Z"),
		end: new Date("2016-01-20T14:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311044.doc",
		id : 566585,
		title: "ישיבת מליאה",
		start: new Date("2015-06-29T13:00:00.000Z"),
		end: new Date("2015-06-29T20:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_309285.doc",
		id : 565845,
		title: "ישיבת מליאה",
		start: new Date("2015-06-17T08:00:00.000Z"),
		end: new Date("2015-06-17T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_312584.doc",
		id : 567849,
		title: "ישיבת מליאה",
		start: new Date("2015-07-21T13:00:00.000Z"),
		end: new Date("2015-07-21T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_305541.doc",
		id : 563774,
		title: "ישיבת מליאה",
		start: new Date("2015-05-04T13:00:00.000Z"),
		end: new Date("2015-05-04T18:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313570.doc",
		id : 568659,
		title: "ישיבת מליאה",
		start: new Date("2015-08-04T07:00:00.000Z"),
		end: new Date("2015-08-04T10:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/19\/Plenum\/19_ptm_304738.doc",
		id : 561474,
		title: "ישיבת מליאה",
		start: new Date("2015-01-05T09:00:00.000Z"),
		end: new Date("2015-01-05T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_305572.doc",
		id : 563775,
		title: "ישיבת מליאה",
		start: new Date("2015-05-05T13:00:00.000Z"),
		end: new Date("2015-05-05T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_316580.doc",
		id : 571593,
		title: "ישיבת מליאה",
		start: new Date("2015-11-25T09:00:00.000Z"),
		end: new Date("2015-11-25T16:50:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_321240.doc",
		id : 575806,
		title: "ישיבת מליאה",
		start: new Date("2016-02-09T14:00:00.000Z"),
		end: new Date("2016-02-09T16:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_314090.doc",
		id : 569182,
		title: "ישיבת מליאה",
		start: new Date("2015-09-21T07:00:00.000Z"),
		end: new Date("2015-09-21T10:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313242.doc",
		id : 568293,
		title: "ישיבת מליאה",
		start: new Date("2015-07-28T13:00:00.000Z"),
		end: new Date("2015-07-28T18:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308385.doc",
		id : 565015,
		title: "ישיבת מליאה",
		start: new Date("2015-06-01T13:00:00.000Z"),
		end: new Date("2015-06-01T19:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_305620.doc",
		id : 563776,
		title: "ישיבת מליאה",
		start: new Date("2015-05-06T08:00:00.000Z"),
		end: new Date("2015-05-06T14:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_309743.doc",
		id : 566200,
		title: "ישיבת מליאה",
		start: new Date("2015-06-24T08:00:00.000Z"),
		end: new Date("2015-06-24T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307991.doc",
		id : 564685,
		title: "ישיבת מליאה",
		start: new Date("2015-05-25T13:00:00.000Z"),
		end: new Date("2015-05-25T23:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307568.doc",
		id : 564450,
		title: "ישיבת מליאה",
		start: new Date("2015-05-18T13:00:00.000Z"),
		end: new Date("2015-05-18T17:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308808.doc",
		id : 565418,
		title: "ישיבת מליאה",
		start: new Date("2015-06-08T13:00:00.000Z"),
		end: new Date("2015-06-08T16:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_318808.doc",
		id : 573348,
		title: "ישיבת מליאה",
		start: new Date("2015-12-29T14:00:00.000Z"),
		end: new Date("2015-12-29T15:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307658.doc",
		id : 564602,
		title: "ישיבת מליאה",
		start: new Date("2015-05-20T08:00:00.000Z"),
		end: new Date("2015-05-20T13:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308086.doc",
		id : 564715,
		title: "ישיבת מליאה",
		start: new Date("2015-05-27T08:00:00.000Z"),
		end: new Date("2015-05-27T12:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_304958.doc",
		id : 562182,
		title: "ישיבת מליאה",
		start: new Date("2015-03-31T13:00:00.000Z"),
		end: new Date("2015-03-31T17:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_309627.doc",
		id : 566199,
		title: "ישיבת מליאה",
		start: new Date("2015-06-23T13:00:00.000Z"),
		end: new Date("2015-06-23T15:40:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307604.doc",
		id : 564601,
		title: "ישיבת מליאה",
		start: new Date("2015-05-19T13:00:00.000Z"),
		end: new Date("2015-05-19T15:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_315426.doc",
		id : 570518,
		title: "ישיבת מליאה",
		start: new Date("2015-11-03T14:00:00.000Z"),
		end: new Date("2015-11-03T17:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_313720.doc",
		id : 568832,
		title: "ישיבת מליאה",
		start: new Date("2015-08-31T13:00:00.000Z"),
		end: new Date("2015-08-31T13:20:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_307157.doc",
		id : 564427,
		title: "ישיבת מליאה",
		start: new Date("2015-05-14T16:00:00.000Z"),
		end: new Date("2015-05-14T21:10:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_308013.doc",
		id : 564713,
		title: "ישיבת מליאה",
		start: new Date("2015-05-26T13:00:00.000Z"),
		end: new Date("2015-05-26T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_304976.doc",
		id : 563611,
		title: "ישיבת מליאה",
		start: new Date("2015-04-20T08:00:00.000Z"),
		end: new Date("2015-04-20T08:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/19\/Plenum\/19_ptm_304826.doc",
		id : 561657,
		title: "ישיבת מליאה",
		start: new Date("2015-01-21T09:00:00.000Z"),
		end: new Date("2015-01-21T17:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311509.doc",
		id : 566997,
		title: "ישיבת מליאה",
		start: new Date("2015-07-07T13:00:00.000Z"),
		end: new Date("2015-07-07T15:30:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/20\/Plenum\/20_ptm_311047.doc",
		id : 566596,
		title: "ישיבת מליאה",
		start: new Date("2015-06-30T13:00:00.000Z"),
		end: new Date("2015-06-30T15:00:00.000Z"),
		"IsSpecialMeeting" : 0
	},
	{
		"FilePath" : "https:\/\/fs.knesset.gov.il\/19\/Plenum\/19_ptm_304884.doc",
		id : 561974,
		title: "ישיבת מליאה",
		start: new Date("2015-02-16T10:00:00.000Z"),
		end: new Date("2015-02-16T12:10:00.000Z"),
		"IsSpecialMeeting" : 0
	}
]

export function createEventId() {
  return String(eventGuid++)
}