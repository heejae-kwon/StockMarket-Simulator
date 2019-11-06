const titleText = '';
const histogram_graphTitleText = 'Daily Gain Histogram';
const histogram_xAxisLabelText = 'Returns range';
const histogram_yAxisLabelText = 'Frequency';
const line_graphTitleText = 'Account value over time';
const line_yAxisLabelText = 'Account value';
const candlestick_graphTitleText = 'Stock Price';
const volume_graphTitleText = 'Stock Volume';

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

var indivPortfolio = [];
var stockInfo = [];
var volumeInfo = [];
var taxBrackets = new Map();

const getTaxRate = function (year) {

	var taxRate = [];

	if (year >= 2009 && year <= 2012) {
		var rateInfo = new Object();
		rateInfo.rate = 10;
		switch (year) {
			case 2009: rateInfo.value = 8350; break;
			case 2010: rateInfo.value = 8375; break;
			case 2011: rateInfo.value = 8500; break;
			case 2012: rateInfo.value = 8700; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 15;
		switch (year) {
			case 2009: rateInfo.value = 33950; break;
			case 2010: rateInfo.value = 34000; break;
			case 2011: rateInfo.value = 34500; break;
			case 2012: rateInfo.value = 35350; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 25;
		switch (year) {
			case 2009: rateInfo.value = 82250; break;
			case 2010: rateInfo.value = 82400; break;
			case 2011: rateInfo.value = 83600; break;
			case 2012: rateInfo.value = 85650; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 28;
		switch (year) {
			case 2009: rateInfo.value = 171550; break;
			case 2010: rateInfo.value = 171850; break;
			case 2011: rateInfo.value = 174400; break;
			case 2012: rateInfo.value = 178650; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 33;
		switch (year) {
			case 2009: rateInfo.value = 372950; break;
			case 2010: rateInfo.value = 373650; break;
			case 2011: rateInfo.value = 379150; break;
			case 2012: rateInfo.value = 388350; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 35;
		switch (year) {
			case 2009: rateInfo.value = 372951; break;
			case 2010: rateInfo.value = 373651; break;
			case 2011: rateInfo.value = 379151; break;
			case 2012: rateInfo.value = 388351; break;
		}
		taxRate.push(rateInfo);
	}
	else if (year >= 2013 && year <= 2017) {
		var rateInfo = new Object();
		rateInfo.rate = 10;
		switch (year) {
			case 2013: rateInfo.value = 8925; break;
			case 2014: rateInfo.value = 9075; break;
			case 2015: rateInfo.value = 9225; break;
			case 2016: rateInfo.value = 9275; break;
			case 2017: rateInfo.value = 9325; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 15;
		switch (year) {
			case 2013: rateInfo.value = 36250; break;
			case 2014: rateInfo.value = 36900; break;
			case 2015: rateInfo.value = 37450; break;
			case 2016: rateInfo.value = 37650; break;
			case 2017: rateInfo.value = 37950; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 25;
		switch (year) {
			case 2013: rateInfo.value = 87850; break;
			case 2014: rateInfo.value = 89350; break;
			case 2015: rateInfo.value = 90750; break;
			case 2016: rateInfo.value = 91150; break;
			case 2017: rateInfo.value = 91900; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 28;
		switch (year) {
			case 2013: rateInfo.value = 183250; break;
			case 2014: rateInfo.value = 186350; break;
			case 2015: rateInfo.value = 189300; break;
			case 2016: rateInfo.value = 190150; break;
			case 2017: rateInfo.value = 191650; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 33;
		switch (year) {
			case 2013: rateInfo.value = 398350; break;
			case 2014: rateInfo.value = 405100; break;
			case 2015: rateInfo.value = 411500; break;
			case 2016: rateInfo.value = 413350; break;
			case 2017: rateInfo.value = 416700; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 35;
		switch (year) {
			case 2013: rateInfo.value = 400000; break;
			case 2014: rateInfo.value = 406750; break;
			case 2015: rateInfo.value = 413200; break;
			case 2016: rateInfo.value = 415050; break;
			case 2017: rateInfo.value = 418400; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 39.6;
		switch (year) {
			case 2013: rateInfo.value = 400001; break;
			case 2014: rateInfo.value = 406751; break;
			case 2015: rateInfo.value = 413201; break;
			case 2016: rateInfo.value = 415051; break;
			case 2017: rateInfo.value = 418401; break;
		}
		taxRate.push(rateInfo);
	}
	else if (year >= 2018 && year <= 2019) {
		var rateInfo = new Object();
		rateInfo.rate = 10;
		switch (year) {
			case 2018: rateInfo.value = 9525; break;
			case 2019: rateInfo.value = 9700; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 12;
		switch (year) {
			case 2018: rateInfo.value = 38700; break;
			case 2019: rateInfo.value = 39475; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 22;
		switch (year) {
			case 2018: rateInfo.value = 82500; break;
			case 2019: rateInfo.value = 84200; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 24;
		switch (year) {
			case 2018: rateInfo.value = 157500; break;
			case 2019: rateInfo.value = 160725; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 32;
		switch (year) {
			case 2018: rateInfo.value = 200000; break;
			case 2019: rateInfo.value = 204100; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 35;
		switch (year) {
			case 2018: rateInfo.value = 500000; break;
			case 2019: rateInfo.value = 510300; break;
		}
		taxRate.push(rateInfo);
		var rateInfo = new Object();
		rateInfo.rate = 37;
		switch (year) {
			case 2018: rateInfo.value = 500001; break;
			case 2019: rateInfo.value = 510301; break;
		}
		taxRate.push(rateInfo);
	}
	taxBrackets.set(year, taxRate);
}

for (var i = 2009; i <= 2019; ++i)
	getTaxRate(i);

class Simulation {
	constructor() {

		this._CompanyNames = ['A', 'AAP', 'AAPL', 'ABBV', 'ABC', 'ABEV', 'ABT', 'ACN', 'ADBE', 'ADI', 'ADM', 'ADP', 'ADSK', 'AEE', 'AEP', 'AFK', 'AFL', 'AGN', 'AIG', 'AJG', 'AKAM', 'ALC', 'ALGN', 'ALL', 'ALXN', 'AMAT', 'AMCR', 'AMD', 'AME', 'AMGN', 'AMH', 'AMP', 'AMT', 'AMTD', 'AMZN', 'ANET', 'ANSS', 'ANTM', 'AON', 'APD', 'APH', 'APO', 'APTV', 'ARE', 'ARW', 'ATO', 'ATR', 'ATUS', 'ATVI', 'AVB', 'AVGO', 'AVY', 'AWK', 'AXP', 'AYI', 'AZO', 'BA', 'BABA', 'BAC', 'BAH', 'BAP', 'BAX', 'BBT', 'BBY', 'BDX', 'BFAM', 'BHGE', 'BIDU', 'BIIB', 'BIL', 'BK', 'BKNG', 'BLK', 'BLL', 'BMY', 'BNDX', 'BPL', 'BR', 'BRK-B', 'BRX', 'BSX', 'BWA', 'BX', 'BXP', 'BZH', 'C', 'CAG', 'CAH', 'CAT', 'CB', 'CBOE', 'CBRE', 'CBS', 'CCI', 'CCK', 'CCL', 'CDNS', 'CDW', 'CE', 'CELG', 'CERN', 'CFG', 'CFR', 'CHD', 'CHK', 'CHRW', 'CHTR', 'CI', 'CINF', 'CL', 'CLX', 'CMA', 'CMCSA', 'CME', 'CMG', 'CMI', 'CMS', 'CNC', 'CNI', 'CNP', 'CNX', 'COF', 'COO', 'COP', 'COST', 'CP', 'CPA', 'CPRT', 'CRM', 'CSCO', 'CSGP', 'CSL', 'CSX', 'CTAS', 'CTL', 'CTLT', 'CTSH', 'CTVA', 'CTXS', 'CVS', 'CVX', 'CXO', 'D', 'DAL', 'DCI', 'DD', 'DE', 'DEI', 'DFS', 'DG', 'DGX', 'DHI', 'DHR', 'DIS', 'DISCA', 'DISH', 'DLR', 'DLTR', 'DOCU', 'DOV', 'DOW', 'DRE', 'DRI', 'DSPG', 'DTE', 'DUK', 'DVA', 'DXCM', 'EA', 'EBAY', 'ECL', 'ED', 'EDU', 'EFX', 'EGP', 'EIX', 'EL', 'ELS', 'EMN', 'EMR', 'ENB', 'ENR', 'EOG', 'EPAM', 'EPD', 'EQIX', 'EQR', 'ES', 'ESS', 'ET', 'ETN', 'ETR', 'EVRG', 'EW', 'EWBC', 'EXAS', 'EXC', 'EXPD', 'EXPE', 'EXR', 'FANG', 'FAST', 'FB', 'FBHS', 'FCX', 'FDX', 'FE', 'FICO', 'FIS', 'FISV', 'FITB', 'FLT', 'FMX', 'FNDA', 'FRC', 'FRT', 'FSLR', 'FTV', 'GD', 'GDDY', 'GE', 'GILD', 'GIS', 'GLD', 'GLW', 'GM', 'GNRC', 'GOOG', 'GOOGL', 'GPC', 'GPN', 'GPS', 'GRMN', 'GS', 'GWW', 'HAL', 'HAS', 'HBAN', 'HCA', 'HCP', 'HD', 'HDB', 'HES', 'HIG', 'HLT', 'HOLX', 'HON', 'HPE', 'HPQ', 'HRL', 'HST', 'HSY', 'HTHT', 'HUM', 'IAC', 'IBM', 'ICE', 'IDXX', 'IEX', 'IFF', 'ILMN', 'INCY', 'INFO', 'INFY', 'INTC', 'INTU', 'INVH', 'IP', 'IPHI', 'IQV', 'IR', 'ISRG', 'IT', 'ITUB', 'ITW', 'JAZZ', 'JBGS', 'JD', 'JEC', 'JKHY', 'JNJ', 'JOBS', 'JPM', 'JWN', 'K', 'KEY', 'KEYS', 'KHC', 'KIM', 'KLAC', 'KMB', 'KMI', 'KMX', 'KO', 'KR', 'KSS', 'KSU', 'L', 'LDOS', 'LEN', 'LH', 'LHX', 'LII', 'LIN', 'LLY', 'LMT', 'LNC', 'LNT', 'LOGI', 'LOW', 'LPT', 'LRCX', 'LSXMA', 'LULU', 'LUV', 'LVS', 'LYB', 'LYFT', 'MA', 'MAA', 'MAR', 'MAS', 'MCD', 'MCHP', 'MCK', 'MDLZ', 'MDT', 'MELI', 'MET', 'MGM', 'MHK', 'MIDD', 'MKC', 'MKTX', 'MLM', 'MMC', 'MMM', 'MMP', 'MNST', 'MO', 'MPC', 'MPLX', 'MRK', 'MRVL', 'MS', 'MSA', 'MSCI', 'MSFT', 'MSI', 'MTB', 'MTCH', 'MTD', 'MU', 'MXIM', 'NBR', 'NDAQ', 'NEE', 'NEM', 'NFG', 'NFLX', 'NI', 'NKE', 'NNN', 'NOC', 'NOW', 'NSC', 'NTAP', 'NTRS', 'NUE', 'NVDA', 'NVR', 'NWE', 'NXST', 'NYT', 'O', 'OAK', 'ODFL', 'OKE', 'OMC', 'ORCL', 'ORLY', 'OUT', 'OXY', 'PAA', 'PAG', 'PANW', 'PAYX', 'PBF', 'PCAR', 'PCG', 'PE', 'PEG', 'PEP', 'PFE', 'PFG', 'PFGC', 'PFPT', 'PG', 'PGR', 'PH', 'PKG', 'PLD', 'PM', 'PNC', 'PODD', 'POOL', 'POR', 'POST', 'PPG', 'PPL', 'PRU', 'PSA', 'PSX', 'PVH', 'PXD', 'PYPL', 'QCOM', 'QQQ', 'RBBN', 'RCL', 'REG', 'REGN', 'RF', 'RIG', 'RJF', 'RMD', 'ROK', 'ROP', 'ROST', 'RPM', 'RRC', 'RSG', 'RTN', 'RY', 'RYN', 'SBAC', 'SBUX', 'SCHW', 'SHLDQ', 'SHOP', 'SHW', 'SIVB', 'SJM', 'SLB', 'SLGN', 'SNA', 'SNPS', 'SO', 'SPG', 'SPGI', 'SPLK', 'SPOT', 'SPY', 'SQ', 'SRE', 'STI', 'STT', 'STX', 'STZ', 'SWK', 'SWKS', 'SYF', 'SYK', 'SYMC', 'SYY', 'T', 'TAP', 'TD', 'TDG', 'TDOC', 'TEAM', 'TEL', 'TER', 'TFX', 'TGT', 'TIF', 'TJX', 'TMO', 'TMUS', 'TROW', 'TRP', 'TRV', 'TSCO', 'TSM', 'TSN', 'TTC', 'TTD', 'TTWO', 'TWLO', 'TWTR', 'TXN', 'TXT', 'UAL', 'UDR', 'UHS', 'ULTA', 'UNH', 'UNP', 'UPS', 'USB', 'UTX', 'V', 'VEEV', 'VFC', 'VICI', 'VIG', 'VLO', 'VMC', 'VNO', 'VRSK', 'VRSN', 'VRTX', 'VTIP', 'VTR', 'VZ', 'W', 'WAB', 'WAT', 'WBA', 'WCG', 'WCN', 'WDAY', 'WDC', 'WEC', 'WELL', 'WEX', 'WFT', 'WLL', 'WLTW', 'WM', 'WMB', 'WMT', 'WPC', 'WRB', 'WRK', 'WST', 'WY', 'XEL', 'XLB', 'XLNX', 'XOM', 'XRAY', 'XYL', 'Y', 'YUM', 'YUMC', 'ZBH', 'ZBRA', 'ZEN', 'ZTS'];
		this._SimulationMethods = ['Price Went Up', 'Price Wen Down'];
		//key: CompanyName(string), value: each company's data of map
		//value =Map(key:Date(string) value:{  Open: , High: , Low: , Close: , Adjusted_close: , Volume:  })
		this._AllData = new Map();
		//Set to Array
		this._DateArray = new Array();
		this._DateIndexMap = new Map();

		//Needs to clear
		this._StartDate = new Date("2010-01-01").toUTCString();
		this._CurrentDate = this._StartDate;
		this._Yesterday = null;
		this._EndDate = new Date("2010-12-31").toUTCString();
		this._Account = 100000;
		this._StartAccount = new Number(this._Account);
		//key._CompanyNames, value:Share
		this._CurrentStock = new Map();
		this._History = new Array();
		this._PercentageHistory = new Array();
		this._MinimumAccount = new Number(this._Account);
		this._LastDayOfMarket = "";

	}

	_getCompanyfile(filepath, companyname) {
		return new Promise((resolve, reject) => {

			Papa.parse(filepath + companyname + ".csv", {
				download: true,
				complete: (r) => {
					const data = [];
					r.data.forEach((d) => {
						data.push({ Date: d[0].toString(), Open: +d[1], High: +d[2], Low: +d[3], Close: +d[4], Adjusted_close: +d[5], Volume: +d[6] });
					});
					data.pop();
					data.shift();
					const map = new Map();
					for (let j = 0; j < data.length; ++j) {
						const ele = data[j];
						const date = (ele.Date);
						const dateobj = new Date(date);
						dateobj.setHours(0, 0, 0, 0);
						map.set(dateobj.toUTCString(), { Open: ele.Open, High: ele.High, Low: ele.Low, Close: ele.Close, Adjusted_close: ele.Adjusted_close, Volume: ele.Volume })
						this._DateArray.push(date);
					}
					this._AllData.set(companyname, map);

					resolve();
				}
			}
			);

		});

	}
	_SmallDiffBetweenOpenClose() {
		const stocks = new Array();
		const usefulIndex = new Array();

		for (let i = 0; i < this._CompanyNames.length; ++i) {
			const file = this._AllData.get(this._CompanyNames[i]);
			if (file.has(this._CurrentDate)) {
				const increment = file.get(this._CurrentDate).Open - file.get(this._CurrentDate).Close;
				if (increment > 0) {
					usefulIndex.push({ index: i, value: increment });
				}
			}
		}

		usefulIndex.sort((a, b) => { return a.value - b.value });

		let arraysize = usefulIndex.length;
		if (arraysize > 10) {
			arraysize = 10;
		}
		for (let i = 0; i < arraysize; ++i) {
			stocks.push(this._CompanyNames[usefulIndex[i].index]);
		}
		return stocks;
	}
	_SmallDiffBetweenHighLow() {
		const stocks = new Array();
		const usefulIndex = new Array();

		for (let i = 0; i < this._CompanyNames.length; ++i) {
			const file = this._AllData.get(this._CompanyNames[i]);
			if (file.has(this._CurrentDate)) {
				const increment = file.get(this._CurrentDate).High - file.get(this._CurrentDate).Low;
				if (increment > 0) {
					usefulIndex.push({ index: i, value: increment });
				}
			}
		}

		usefulIndex.sort((a, b) => { return a.value - b.value });

		let arraysize = usefulIndex.length;
		if (arraysize > 10) {
			arraysize = 10;
		}
		for (let i = 0; i < arraysize; ++i) {
			stocks.push(this._CompanyNames[usefulIndex[i].index]);
		}
		return stocks;
	}
	_PriceWentUp() {
		const stocks = new Array();
		if (this._Yesterday == null) {
			return stocks;
		}

		const usefulIndex = new Array();
		for (let i = 0; i < this._CompanyNames.length; ++i) {
			const file = this._AllData.get(this._CompanyNames[i]);
			if (file.has(this._CurrentDate) && file.has(this._Yesterday)) {

				const increment = file.get(this._CurrentDate).Adjusted_close - file.get(this._Yesterday).Adjusted_close;
				if (increment > 0) {
					usefulIndex.push({ index: i, value: increment });
				}
			}
		}
		usefulIndex.sort((a, b) => { return b.value - a.value });

		let arraysize = usefulIndex.length;
		if (arraysize > 10) {
			arraysize = 10;
		}
		for (let i = 0; i < arraysize; ++i) {
			stocks.push(this._CompanyNames[usefulIndex[i].index]);
		}

		return stocks;
	}


	_PriceWentDown() {
		const stocks = new Array();
		if (this._Yesterday == null) {
			return stocks;
		}

		const usefulIndex = new Array();
		for (let i = 0; i < this._CompanyNames.length; ++i) {
			const file = this._AllData.get(this._CompanyNames[i]);
			if (file.has(this._CurrentDate) && file.has(this._Yesterday)) {

				const increment = file.get(this._CurrentDate).Adjusted_close - file.get(this._Yesterday).Adjusted_close;
				if (increment < 0) {
					usefulIndex.push({ index: i, value: increment });
				}
			}
		}
		usefulIndex.sort((a, b) => { return b.value - a.value });

		let arraysize = usefulIndex.length;
		if (arraysize > 10) {
			arraysize = 10;
		}
		for (let i = 0; i < arraysize; ++i) {
			stocks.push(this._CompanyNames[usefulIndex[i].index]);
		}

		return stocks;
	}

	//return array of company names
	_ChooseSellStock() {
		const sellstock = new Array();
		for (let key of this._CurrentStock.keys()) {
			if (this._CurrentStock.get(key) != 0) {
				sellstock.push(key);
			}
		}

		return sellstock;
	}
	_RandomPick() {
		const buystock = new Set();
		const usefulIndex = new Array();
		for (let i = 0; i < this._CompanyNames.length; ++i) {
			const file = this._AllData.get(this._CompanyNames[i]);
			const nextday = this._DateArray[this._DateIndexMap.get(this._CurrentDate) + 1];
			if (file.has(this._CurrentDate) && file.has(nextday)) {
				usefulIndex.push(i);
			}
		}
		if (usefulIndex.length > 10) {
			while (buystock.size < 10) {
				const i = Math.floor(Math.random() * usefulIndex.length);
				if (buystock.has(this._CompanyNames[usefulIndex[i]]) == false) {
					buystock.add(this._CompanyNames[usefulIndex[i]]);
				}
			}
		}
		else {
			for (let i = 0; i < usefulIndex.length; ++i) {
				buystock.add(this._CompanyNames[usefulIndex[i]]);
			}
		}

		return Array.from(buystock);

	}
	_ChooseBuyStock(_method) {
		let buystock = new Array();
		switch (_method) {
			case 0: {
				buystock = this._PriceWentUp();
				break;
			}
			case 1: {
				buystock = this._PriceWentDown();
				break;
			}
			case 2: {
				buystock = this._SmallDiffBetweenOpenClose();
				break;
			}
			case 3: {
				buystock = this._SmallDiffBetweenHighLow();
				break;
			}
		}
		return buystock;
	}

	_Sell(stocks, date) {
		if (stocks.length == 0) {
			return;
		}

		for (let i = 0; i < stocks.length; ++i) {
			const companydata = this._AllData.get(stocks[i]);
			if (companydata.has(date)) {
				const adjusted_close = companydata.get(date).Adjusted_close;
				const share = this._CurrentStock.get(stocks[i]);
				this._Account += adjusted_close * share;
				this._CurrentStock.set(stocks[i], 0);
			}
		}
	}

	_Buy(stocks, date) {
		if (stocks.length == 0) {
			return;
		}

		let isEnd = false;
		while (isEnd != true) {

			for (let i = 0; i < stocks.length; ++i) {
				const companydata = this._AllData.get(stocks[i]);
				const adjusted_close = companydata.get(date).Adjusted_close;
				let share = 1;
				if (this._Account < adjusted_close) {
					share = this._Account / adjusted_close;
					isEnd = true;
				}
				this._Account -= adjusted_close * share;

				if (this._CurrentStock.has(stocks[i])) {
					// this._CurrentStock.get(stocks[i]) = this._CurrentStock.get(stocks[i])+share;
					const newshare = (this._CurrentStock.get(stocks[i])) + share;
					this._CurrentStock.set(stocks[i], newshare);
				}
				else {
					this._CurrentStock.set(stocks[i], share);
				}

				if (isEnd == true) {
					break;
				}
			}

		}
	}

	_GetAverage(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; ++i) {
			sum += arr[i];
		}
		return sum / arr.length;
	}

	_GetStddev(arr) {
		let variance = 0;
		const avg = this._GetAverage(arr);
		for (let i = 0; i < arr.length; ++i) {
			variance += (arr[i] - avg) * (arr[i] - avg);
		}
		variance = variance / arr.length;

		return Math.sqrt(variance);
	}
	_CalculateParameters() {
		//Calculations
		const ending_account_value = this._Account;
		const percentage_gain = (ending_account_value - this._StartAccount) / this._StartAccount;
		const max_drawdown_percentage = (this._StartAccount - this._MinimumAccount) / this._StartAccount;
		const average_daily_percentage = this._GetAverage(this._PercentageHistory);
		const stddev_daily_percentage = this._GetStddev(this._PercentageHistory);
		const yearly_percentage = Math.pow(1 + average_daily_percentage, this._History.length) - 1;
		const stddev_yearly_percentage = stddev_daily_percentage * Math.sqrt(this._History.length);
		//RiskFreePercentGains = 3.5%
		//I do not know how to calculate.
		const sharpe_ratio = (yearly_percentage - 3.5) / stddev_yearly_percentage;


		const _Result = {
			history: [],
			ending_account_value: 0,
			account_percentage_gain: 0,
			max_drawdown_percentage: 0,
			average_daily_percentage: 0,
			stddev_daily_percentage: 0,
			yearly_percentage: 0,
			stddev_yearly_percentage: 0,
			sharpe_ratio: 0,
			lastday_sNp500: 0
		};
		_Result.history = Array.from(this._History);
		_Result.ending_account_value = ending_account_value;
		_Result.account_percentage_gain = percentage_gain;
		_Result.max_drawdown_percentage = max_drawdown_percentage;
		_Result.average_daily_percentage = average_daily_percentage;
		_Result.stddev_daily_percentage = stddev_daily_percentage;
		_Result.yearly_percentage = yearly_percentage;
		_Result.stddev_yearly_percentage = stddev_yearly_percentage;
		_Result.sharpe_ratio = sharpe_ratio;
		_Result.lastday_sNp500 = this._GetDailysNp500(this._LastDayOfMarket);

		return _Result;
	}

	_GetArrayOfDate() {
		this._DateArray.sort();
		this._DateArray = Array.from(new Set(this._DateArray));
		const newdatearr = new Array();
		for (let i = 0; i < this._DateArray.length; ++i) {
			let date = new Date(this._DateArray[i]);
			date.setHours(0, 0, 0, 0);
			date = date.toUTCString();
			this._DateIndexMap.set(date, i);
			newdatearr.push(date);
		}
		this._DateArray = newdatearr;
	}
	_GetDailysNp500(date) {
		let index_level = 0;
		for (let i = 0; i < this._CompanyNames.length; ++i) {
			const file = this._AllData.get(this._CompanyNames[i]);
			if (file.has(date)) {
				const price = file.get(date).Adjusted_close;
				const volume = file.get(date).Volume;
				index_level = index_level + (price * volume);
			}
		}
		index_level = index_level / 8900000000;

		return index_level;

	}

	//----public functions----//
	GetData() {
		const filepath = "https://raw.githubusercontent.com/heejae-kwon/StockData/master/Project6_StockData/";
		const promises = this._CompanyNames.map(companyName => this._getCompanyfile(filepath, companyName));
		return Promise.all(promises);
	}

	Run(_startday, _endday, _startaccount, _method) {

		if (this._DateIndexMap.size == 0) {
			this._GetArrayOfDate();
		}
		//Needs to be cleared
		this._StartDate = new Date(_startday);
		this._StartDate.setHours(0, 0, 0, 0);
		this._StartDate = this._StartDate.toUTCString();
		this._CurrentDate = this._StartDate;
		this._EndDate = new Date(_endday);
		this._EndDate.setHours(0, 0, 0, 0);
		this._EndDate = this._EndDate.toUTCString();

		this._StartAccount = parseFloat(_startaccount.toString());
		this._Account = (this._StartAccount);
		this._MinimumAccount = (this._Account);
		//key._CompanyNames, value:Share
		this._CurrentStock = new Map();
		this._History = new Array();
		this._PercentageHistory = new Array();

		//main loop
		let loopenddate = new Date(this._EndDate);
		loopenddate.setDate(new Date(this._EndDate).getDate() + 1);
		loopenddate.setHours(0, 0, 0, 0);
		loopenddate = loopenddate.toUTCString();
		let lastboughtstocks = [];
		let lastdayboughtstocks = "";
		while (this._CurrentDate != loopenddate) {

			if (this._DateIndexMap.has(this._CurrentDate)) {
				const sellstock = this._ChooseSellStock();
				this._Sell(sellstock, this._CurrentDate);

				if (this._Account >= 1) {

					let percentage = 0;
					if (this._History.length != 0) {
						const prevAccount = this._History[this._History.length - 1].daily_account;
						if (prevAccount != 0) {
							percentage = (this._Account - prevAccount) / prevAccount;
						}
					}

					if (this._MinimumAccount > this._Account) {
						this._MinimumAccount = (this._Account);
					}
					const accountoftoday = new Number(this._Account);
					this._PercentageHistory.push(percentage);

					//do not buy in last day of simulation
					let buystock = [];
					if (this._CurrentDate != this._EndDate) {
						buystock = this._ChooseBuyStock(_method);
						this._Buy(buystock, this._CurrentDate);
						lastdayboughtstocks = this._CurrentDate;
						this._LastDayOfMarket = lastdayboughtstocks;
						lastboughtstocks = buystock;
					}
					this._History.push({
						buystocks: buystock, date: this._CurrentDate,
						daily_account: accountoftoday, daily_percentage: percentage
					});
				}
				this._Yesterday = new Date(this._CurrentDate);
				this._Yesterday.setHours(0, 0, 0, 0);
				this._Yesterday = this._Yesterday.toUTCString();
			}
			//update current date to nextday
			let currentdate = new Date(this._CurrentDate);
			currentdate.setDate(currentdate.getDate() + 1);
			currentdate.setHours(0, 0, 0, 0);
			this._CurrentDate = currentdate.toUTCString();
		}
		if (this._Account <= 0) {
			this._Sell(lastboughtstocks, lastdayboughtstocks);
		}

		return (this._CalculateParameters());

	}//Run


}//classEnd


function drawSection() {
	const lineData = [[{ "x": 20, "y": 50 }, { "x": width, "y": 50 }],
	[{ "x": width / 2, "y": 50 }, { "x": width / 2, "y": 600 }],
	[{ "x": 20, "y": 600 }, { "x": width, "y": 600 }],
	[{ "x": width / 2, "y": 600 }, { "x": width / 2, "y": 1200 }],
	[{ "x": 20, "y": 1200 }, { "x": width, "y": 1200 }]];

	const lineFunction = d3.line()
		.x(d => d.x)
		.y(d => d.y);

	lineData.forEach(function (line) {
		svg.append("path")
			.attr("d", lineFunction(line))
			.attr("stroke", "black")
			.attr("stroke-width", 2)
			.attr("fill", "none");
	});
}

const displayText = (
	starting_account_value,
	ending_account_value,
	account_percentage_gain,
	average_yearly_percentage_gain,
	stddev_average_yearly_percentage_gain,
	max_drawdown_percentage,
	sharpe_ratio,
	spy_percentage_gain) => {

	const starting_account_value_formatted = starting_account_value.toLocaleString();
	const ending_account_value_formatted = parseInt(ending_account_value).toLocaleString();
	const account_percentage_gain_formatted = Math.round(account_percentage_gain * 1000000) / 1000000;
	const spy_percentage_gain_formatted = Math.round(spy_percentage_gain * 1000000) / 1000000;
	const average_yearly_percentage_gain_formatted = Math.round(average_yearly_percentage_gain * 1000000) / 1000000;
	const stddev_average_yearly_percentage_gain_formatted = Math.round(stddev_average_yearly_percentage_gain * 1000000) / 1000000;
	const sharpe_ratio_formatted = Math.round(sharpe_ratio * 1000000) / 1000000;
	const max_drawdown_percentage_formatted = Math.round(max_drawdown_percentage * 1000000) / 1000000;

	document.getElementById("startMoneyReport").innerHTML = '$' + starting_account_value_formatted;
	document.getElementById("endMoneyReport").innerHTML = '$' + ending_account_value_formatted;
	document.getElementById("acntPercGainReport").innerHTML = account_percentage_gain_formatted + '%';
	document.getElementById("SPYPercGainReport").innerHTML = spy_percentage_gain_formatted + '%';
	document.getElementById("aveYearPercGainReport").innerHTML = average_yearly_percentage_gain_formatted + '%';
	document.getElementById("stdevAveYearPercGainReport").innerHTML = '+/- ' + stddev_average_yearly_percentage_gain_formatted + '%';
	document.getElementById("sharpeRatioReport").innerHTML = sharpe_ratio_formatted;
	document.getElementById("maxDrawdownPercReport").innerHTML = max_drawdown_percentage_formatted + '%';
}

const renderHistogram = (data) => {
	const xValue = data.map(d => d.daily_gain);
	const margin = { top: 130, right: 50, bottom: 700, left: 1050 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	const xScale = d3.scaleLinear()
		.domain(d3.extent(xValue)).nice()
		.range([0, innerWidth]);

	const bins = d3.histogram()
		.domain(xScale.domain())
		.thresholds(xScale.ticks(40))(xValue); // number of bins

	const yScale = d3.scaleLinear()
		.domain([0, d3.max(bins, d => d.length)]).nice()
		.range([innerHeight, 0]);

	const groupElement = svg.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const xAxis = d3.axisBottom(xScale)
		.tickSizeOuter(0);

	const yAxis = d3.axisLeft(yScale)
		.tickSize(-innerWidth);

	const xAxisG = groupElement.append('g').call(xAxis)
		.attr("transform", `translate(0,${innerHeight})`);

	const yAxisG = groupElement.append('g').call(yAxis);

	yAxisG.select(".domain").remove();
	yAxisG.select(".tick:last-of-type text").clone();

	xAxisG.append('text')
		.attr('class', 'axis-label')
		.attr('y', 55)
		.attr('x', innerWidth / 2)
		.attr('fill', 'black')
		.attr('font-weight', 'bold')
		.attr('text-anchor', 'middle')
		.text(histogram_xAxisLabelText);

	yAxisG.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('class', 'axis-label')
		.attr('x', -innerHeight / 2)
		.attr('y', -60)
		.attr('text-anchor', 'middle')
		.attr('font-weight', 'bold')
		.text(histogram_yAxisLabelText);

	groupElement.selectAll("rect").data(bins)
		.enter().append('rect')
		.attr('x', d => xScale(d.x0) + 1)
		.attr('width', d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 1))
		.attr('y', d => yScale(d.length))
		.attr('height', d => innerHeight - yScale(d.length))
		.attr("fill", "steelblue");

	groupElement.append('text')
		.attr('class', 'graphTitle')
		.attr('y', -30)
		.attr('x', innerWidth / 2)
		.attr('text-anchor', 'middle')
		.text(histogram_graphTitleText);
};

const renderLineChart = (data) => {
	const months = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }
	const xValue = d => d.Date;
	const yValue = d => d.account_value;

	const margin = { top: 130, right: 1000, bottom: 700, left: 100 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	const xScale = d3.scaleTime()
		.domain(d3.extent(data, xValue)).nice()
		.range([0, innerWidth]);

	const yScale = d3.scaleLinear()
		.domain(d3.extent(data, yValue)).nice()
		.range([innerHeight, 0]);

	const groupElement = svg.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const xAxis = d3.axisBottom(xScale)
		.tickSize(-innerHeight)
		.tickPadding(15)
		.tickFormat(function (d) {
			return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
		});

	const yAxis = d3.axisLeft(yScale)
		.tickSize(-innerWidth)
		.tickPadding(10);

	const xAxisG = groupElement.append('g').call(xAxis)
		.attr("transform", `translate(0,${innerHeight})`);

	const yAxisG = groupElement.append('g').call(yAxis);

	xAxisG.select('.domain').remove();
	yAxisG.select('.domain').remove();

	xAxisG.selectAll(".tick text").call(wrap, 0.206);

	yAxisG.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('class', 'axis-label')
		.attr('x', -innerHeight / 2)
		.attr('y', -100)
		.attr('text-anchor', 'middle')
		.attr('font-weight', 'bold')
		.text(line_yAxisLabelText);

	const lineGenerator = d3.line()
		.x(d => xScale(xValue(d)))
		.y(d => yScale(yValue(d)))
		.curve(d3.curveBasis);

	const curveGraph = groupElement.append('path')
		.attr('class', 'line-path')
		.attr('d', lineGenerator(data));

	var focus = groupElement.append("g")
	    .attr("class", "focus")
	    .style("display", "none");
		
	var focus2 = groupElement.append("g")
	    .attr("class", "focus")
	    .style("display", "none");
		
	var focus3 = groupElement.append("g")
	    .attr("class", "focus")
	    .style("display", "none");
			
	focus.append("circle")
	    .attr("r", 7.5);
	
	var text1 = focus.append("text")
	    .attr("x", 15)
	  	.attr("dy", ".31em");
		
	var text2 = focus2.append("text")
	    .attr("x", 15)
	  	.attr("dy", ".31em");
		
	var text3 = focus3.append("text")
	    .attr("x", 15)
	  	.attr("dy", ".31em");
	
	svg.append("rect")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	    .attr("class", "overlay")
	    .attr("width", innerWidth)
	    .attr("height", innerHeight)
	    .on("mouseover", function() { 
					focus.style("display", null);
					focus2.style("display", null);
					focus3.style("display", null); 
				})
	    .on("mouseout", function() { 
					focus.style("display", "none");
					focus2.style("display", "none");
					focus3.style("display", "none"); 
				})
	    .on("mousemove", mousemove);
					
	function mousemove() {
	  const xDate = xScale.invert(d3.mouse(this)[0]);
	  const bisectDate = d3.bisector(d => d.Date).left;
	  const formatValue = d3.format(',.2f');
	  const formatCurrency = d => `$${formatValue(d)}`;
	  const formatTime = d3.timeFormat("%B %d, %Y");
	  const i = bisectDate(data, xDate, 1);
	  const d0 = data[i - 1];
      const d1 = data[i];
      const d = xDate - d0.Date > d1.Date - xDate ? d1 : d0;
	  
	  var focus2yValue = yScale(d.account_value) + 17;
	  var focus3yValue = yScale(d.account_value) + 34;
	  
	  focus.attr('transform', `translate(${xScale(d.Date)}, ${yScale(d.account_value)})`);
	  focus2.attr('transform', `translate(${xScale(d.Date)}, ${focus2yValue})`);
	  focus3.attr('transform', `translate(${xScale(d.Date)}, ${focus3yValue})`);
	  	  
	  text1.text(formatTime(d.Date));
	  text2.text(formatCurrency(d.account_value));
	  text3.text(d.buystocks);
	}

	groupElement.append('text')
		.attr('class', 'graphTitle')
		.attr('y', -30)
		.attr('x', innerWidth / 2)
		.attr('text-anchor', 'middle')
		.text(line_graphTitleText);
};

const renderCandlestick = (data) => {
	const months = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }
	const margin = { top: 690, right: 1000, bottom: 100, left: 100 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	const groupElement = svg.append('g')
		.attr("id", "candle_g")
		.attr('transform', `translate(${margin.left},${margin.top})`);

	let dates = _.map(data, 'Date');

	var xmin = d3.min(data.map(r => r.Date.getTime()));
	var xmax = d3.max(data.map(r => r.Date.getTime()));
	var xScale = d3.scaleLinear().domain([-1, dates.length])
		.range([0, innerWidth])
	var xDateScale = d3.scaleQuantize().domain([0, dates.length]).range(dates)
	let xBand = d3.scaleBand().domain(d3.range(-1, dates.length)).range([0, innerWidth]).padding(0.3)
	var xAxis = d3.axisBottom()
		.scale(xScale)
		.tickFormat(function (d) {
			d = dates[d]
			return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
		});

	groupElement.append("rect")
		.attr("id", "rect")
		.attr("width", innerWidth)
		.attr("height", innerHeight)
		.style("fill", "none")
		.style("pointer-events", "all")
		.attr("clip-path", "url(#clip)")

	var gX = groupElement.append("g")
		.attr("class", "axis x-axis")
		.attr("transform", "translate(0," + innerHeight + ")")
		.call(xAxis)

	gX.selectAll(".tick text")
		.call(wrap, xBand.bandwidth())

	var ymin = d3.min(data.map(r => r.Low));
	var ymax = d3.max(data.map(r => r.High));
	var yScale = d3.scaleLinear().domain([ymin, ymax]).range([innerHeight, 0]).nice();
	var yAxis = d3.axisLeft()
		.scale(yScale)

	var gY = groupElement.append("g")
		.attr("class", "axis y-axis")
		.call(yAxis);

	var chartBody = groupElement.append("g")
		.attr("class", "chartBody")
		.attr("clip-path", "url(#clip)");

	let candles = chartBody.selectAll(".candle")
		.data(data)
		.enter()
		.append("rect")
		.attr('x', (d, i) => xScale(i) - xBand.bandwidth())
		.attr("class", "candle")
		.attr('y', d => yScale(Math.max(d.Open, d.Close)))
		.attr('width', xBand.bandwidth())
		.attr('height', d => (d.Open === d.Close) ? 1 : yScale(Math.min(d.Open, d.Close)) - yScale(Math.max(d.Open, d.Close)))
		.attr("fill", d => (d.Open === d.Close) ? "silver" : (d.Open > d.Close) ? "red" : "green")

	let stems = chartBody.selectAll("g.line")
		.data(data)
		.enter()
		.append("line")
		.attr("class", "stem")
		.attr("x1", (d, i) => xScale(i) - xBand.bandwidth() / 2)
		.attr("x2", (d, i) => xScale(i) - xBand.bandwidth() / 2)
		.attr("y1", d => yScale(d.High))
		.attr("y2", d => yScale(d.Low))
		.attr("stroke", d => (d.Open === d.Close) ? "white" : (d.Open > d.Close) ? "red" : "green");

	groupElement.append("defs")
		.append("clipPath")
		.attr("id", "clip")
		.append("rect")
		.attr("width", innerWidth)
		.attr("height", innerHeight)

	groupElement.append('text')
		.attr('class', 'graphTitle')
		.attr('y', -30)
		.attr('x', innerWidth / 2)
		.attr('text-anchor', 'middle')
		.text(candlestick_graphTitleText);

	const extent = [[0, 0], [innerWidth, innerHeight]];

	var resizeTimer;
	var zoom = d3.zoom()
		.scaleExtent([1, 100])
		.translateExtent(extent)
		.extent(extent)
		.on("zoom", zoomed)
		.on('zoom.end', zoomend);

	groupElement.call(zoom)

	function zoomed() {

		var t = d3.event.transform;
		let xScaleZ = t.rescaleX(xScale);

		let hideTicksWithoutLabel = function () {
			d3.selectAll('.xAxis .tick text').each(function (d) {
				if (this.innerHTML === '') {
					this.parentNode.style.display = 'none'
				}
			})
		}

		gX.call(d3.axisBottom(xScaleZ).tickFormat((d, e, target) => {
			if (d >= 0 && d <= dates.length - 1) {
				d = dates[d]
				return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
			}
		}))

		candles.attr("x", (d, i) => xScaleZ(i) - (xBand.bandwidth() * t.k) / 2)
			.attr("width", xBand.bandwidth() * t.k);
		stems.attr("x1", (d, i) => xScaleZ(i) - xBand.bandwidth() / 2 + xBand.bandwidth() * 0.5);
		stems.attr("x2", (d, i) => xScaleZ(i) - xBand.bandwidth() / 2 + xBand.bandwidth() * 0.5);

		hideTicksWithoutLabel();

		gX.selectAll(".tick text")
			.call(wrap, xBand.bandwidth())
	}

	function zoomend() {
		var t = d3.event.transform;
		let xScaleZ = t.rescaleX(xScale);
		clearTimeout(resizeTimer)
		resizeTimer = setTimeout(function () {

			var xmin = new Date(xDateScale(Math.floor(xScaleZ.domain()[0])))
			xmax = new Date(xDateScale(Math.floor(xScaleZ.domain()[1])))
			filtered = _.filter(data, d => ((d.Date >= xmin) && (d.Date <= xmax)))
			minP = +d3.min(filtered, d => d.Low)
			maxP = +d3.max(filtered, d => d.High)
			buffer = Math.floor((maxP - minP) * 0.1)

			yScale.domain([minP - buffer, maxP + buffer])
			candles.transition()
				.duration(800)
				.attr("y", (d) => yScale(Math.max(d.Open, d.Close)))
				.attr("height", d => (d.Open === d.Close) ? 1 : yScale(Math.min(d.Open, d.Close)) - yScale(Math.max(d.Open, d.Close)));

			stems.transition().duration(800)
				.attr("y1", (d) => yScale(d.High))
				.attr("y2", (d) => yScale(d.Low))

			gY.transition().duration(800).call(d3.axisLeft().scale(yScale));
		}, 500)

	}
};

const renderVolumeChart = (data) => {
	const months = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }
	const margin = { top: 690, right: 50, bottom: 100, left: 1050 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	const groupElement = svg.append('g')
		.attr("id", "volume_g")
		.attr('transform', `translate(${margin.left},${margin.top})`);

	let dates = _.map(data, 'Date');

	var xmin = d3.min(data.map(r => r.Date.getTime()));
	var xmax = d3.max(data.map(r => r.Date.getTime()));
	var xScale = d3.scaleLinear().domain([-1, dates.length])
		.range([0, innerWidth])
	var xDateScale = d3.scaleQuantize().domain([0, dates.length]).range(dates)
	let xBand = d3.scaleBand().domain(d3.range(-1, dates.length)).range([0, innerWidth]).padding(0.3)
	var xAxis = d3.axisBottom()
		.scale(xScale)
		.tickFormat(function (d) {
			d = dates[d]
			return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
		});

	groupElement.append("rect")
		.attr("id", "rect")
		.attr("width", innerWidth)
		.attr("height", innerHeight)
		.style("fill", "none")
		.style("pointer-events", "all")
		.attr("clip-path", "url(#clip-volume)")

	var gX = groupElement.append("g")
		.attr("class", "axis x-axis")
		.attr("transform", "translate(0," + innerHeight + ")")
		.call(xAxis)

	gX.selectAll(".tick text")
		.call(wrap, xBand.bandwidth())

	var ymin = d3.min(data.map(r => r.Volume));
	var ymax = d3.max(data.map(r => r.Volume));
	var yScale = d3.scaleLinear().domain([ymin, ymax]).range([innerHeight, 0]).nice();
	var yAxis = d3.axisLeft()
		.scale(yScale)

	var gY = groupElement.append("g")
		.attr("class", "axis y-axis")
		.call(yAxis);

	var chartBody = groupElement.append("g")
		.attr("class", "chartBody")
		.attr("clip-path", "url(#clip-volume)");

	let volumes = chartBody.selectAll(".volume")
		.data(data)
		.enter()
		.append("rect")
		.attr('x', (d, i) => xScale(i) - xBand.bandwidth())
		.attr("class", "volume")
		.attr('y', d => innerHeight - yScale(d.Volume))
		.attr('width', xBand.bandwidth())
		.attr('height', d => yScale(d.Volume))
		.attr("fill", d => (d.Open === d.Close) ? "silver" : (d.Open > d.Close) ? "red" : "green")

	groupElement.append("defs")
		.append("clipPath")
		.attr("id", "clip-volume")
		.append("rect")
		.attr("width", innerWidth)
		.attr("height", innerHeight)

	groupElement.append('text')
		.attr('class', 'graphTitle')
		.attr('y', -30)
		.attr('x', innerWidth / 2)
		.attr('text-anchor', 'middle')
		.text(volume_graphTitleText);

	const extent = [[0, 0], [innerWidth, innerHeight]];

	var resizeTimer;
	var zoom = d3.zoom()
		.scaleExtent([1, 100])
		.translateExtent(extent)
		.extent(extent)
		.on("zoom", zoomed)
		.on('zoom.end', zoomend);

	groupElement.call(zoom)

	function zoomed() {

		var t = d3.event.transform;
		let xScaleZ = t.rescaleX(xScale);

		let hideTicksWithoutLabel = function () {
			d3.selectAll('.xAxis .tick text').each(function (d) {
				if (this.innerHTML === '') {
					this.parentNode.style.display = 'none'
				}
			})
		}

		gX.call(d3.axisBottom(xScaleZ).tickFormat((d, e, target) => {
			if (d >= 0 && d <= dates.length - 1) {
				d = dates[d]
				return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
			}
		}))

		volumes.attr("x", (d, i) => xScaleZ(i) - (xBand.bandwidth() * t.k) / 2)
			.attr("width", xBand.bandwidth() * t.k);

		hideTicksWithoutLabel();

		gX.selectAll(".tick text")
			.call(wrap, xBand.bandwidth())
	}

	function zoomend() {
		var t = d3.event.transform;
		let xScaleZ = t.rescaleX(xScale);
		clearTimeout(resizeTimer)
		resizeTimer = setTimeout(function () {

			var xmin = new Date(xDateScale(Math.floor(xScaleZ.domain()[0])))
			xmax = new Date(xDateScale(Math.floor(xScaleZ.domain()[1])))
			filtered = _.filter(data, d => ((d.Date >= xmin) && (d.Date <= xmax)))
			minP = +d3.min(filtered, d => d.Volume)
			maxP = +d3.max(filtered, d => d.Volume)
			buffer = Math.floor((maxP - minP) * 0.1)

			yScale.domain([minP - buffer, maxP + buffer])
			volumes.transition()
				.duration(800)
				.attr("y", d => innerHeight - yScale(d.Volume))
				.attr("height", d => yScale(d.Volume));
			gY.transition().duration(800).call(d3.axisLeft().scale(yScale));
		}, 500)

	}
}

function wrap(text, width) {
	text.each(function () {
		var text = d3.select(this),
			words = text.text().split(/\s+/).reverse(),
			word,
			line = [],
			lineNumber = 0,
			lineHeight = 1.1, // ems
			y = text.attr("y"),
			dy = parseFloat(text.attr("dy")),
			tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
		while (word = words.pop()) {
			line.push(word);
			tspan.text(line.join(" "));
			if (tspan.node().getComputedTextLength() > width) {
				line.pop();
				tspan.text(line.join(" "));
				line = [word];
				tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
			}
		}
	});
}

const changeDropdown = function () {
	d3.select("#candle_g").remove();
	d3.select("#volume_g").remove();
	var selector = document.getElementById("companies");
	var label = selector.options[selector.selectedIndex].value;
	var newFile = simulation._AllData.get(label);
	var newStockInfo = [];
	var newVolumeInfo = [];
	for (var [key, value] of newFile.entries()) {
		var info = new Object();
		info.Date = new Date(key);
		info.Open = parseFloat(value.Open);
		info.High = parseFloat(value.High);
		info.Low = parseFloat(value.Low);
		info.Close = parseFloat(value.Close);
		newStockInfo.push(info);

		var info2 = new Object();
		info2.Date = new Date(key);
		info2.Open = parseFloat(value.Open);
		info2.Close = parseFloat(value.Close);
		info2.Volume = parseInt(value.Volume);
		newVolumeInfo.push(info2);
	}
	renderCandlestick(newStockInfo);
	renderVolumeChart(newVolumeInfo);
};

function dropdown() {
	var companies = simulation._CompanyNames;
	var dropdown = d3.select("dropdown")
		.append("select")
		.attr("id", "companies")
		.attr("onchange", "changeDropdown()")
		.selectAll("option")
		.data(companies)
		.enter().append("option")
		.attr("value", d => d)
		.text(d => d[0].toUpperCase() + d.slice(1, d.length));
	document.getElementById("companies").setAttribute("style", "font-size:17pt");
	document.getElementById("companiesDropdown").innerHTML = "&nbsp&nbsp&nbspCompanies ";
};

const changeMoney = function () {
	var money = parseInt(document.getElementById("startMoney").value);
	document.getElementById("startMoneyReport").innerHTML = '$' + money.toLocaleString();
}

const changeDate = function () {
	var startDate = new Date(document.getElementById("startDate").value);
	var yyyy = startDate.getFullYear();
	var mm = startDate.getMonth() + 1;
	var dd = startDate.getDate() + 2;
	if (Number.isNaN(yyyy) || Number.isNaN(mm) || Number.isNaN(dd))
		return;
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	startDate = yyyy + '-' + mm + '-' + dd;
	document.getElementById("endDate").setAttribute("min", startDate);
	document.getElementById("endDate").setAttribute("value", startDate);
}

const changeTaxYear = function () {
	var taxYear = parseInt(document.getElementById("TaxYearSelect").value);
	document.getElementById("taxBracketYear").innerHTML = taxYear;
	document.getElementById("firstTaxRate").innerHTML = taxBrackets.get(taxYear)[0].rate + '%';
	document.getElementById("firstTax").innerHTML = '$' + taxBrackets.get(taxYear)[0].value.toLocaleString();
	document.getElementById("secondTaxRate").innerHTML = taxBrackets.get(taxYear)[1].rate + '%';
	document.getElementById("secondTax").innerHTML = '$' + taxBrackets.get(taxYear)[1].value.toLocaleString();
	document.getElementById("thirdTaxRate").innerHTML = taxBrackets.get(taxYear)[2].rate + '%';
	document.getElementById("thirdTax").innerHTML = '$' + taxBrackets.get(taxYear)[2].value.toLocaleString();
	document.getElementById("fourthTaxRate").innerHTML = taxBrackets.get(taxYear)[3].rate + '%';
	document.getElementById("fourthTax").innerHTML = '$' + taxBrackets.get(taxYear)[3].value.toLocaleString();
	document.getElementById("fifthTaxRate").innerHTML = taxBrackets.get(taxYear)[4].rate + '%';
	document.getElementById("fifthTax").innerHTML = '$' + taxBrackets.get(taxYear)[4].value.toLocaleString();

	if (taxYear >= 2009 && taxYear <= 2012) {
		document.getElementById("sixthTaxRate").innerHTML = taxBrackets.get(taxYear)[5].rate + '%';
		document.getElementById("sixthTax").innerHTML = '$' + taxBrackets.get(taxYear)[5].value.toLocaleString() + '+';

		var table = document.getElementById("taxBracketTable");

		if (table.rows[8])
			table.deleteRow(8);
	}
	else if (taxYear >= 2013 && taxYear <= 2019) {
		document.getElementById("sixthTaxRate").innerHTML = taxBrackets.get(taxYear)[5].rate + '%';
		document.getElementById("sixthTax").innerHTML = '$' + taxBrackets.get(taxYear)[5].value.toLocaleString();

		var table = document.getElementById("taxBracketTable");

		if (table.rows[8]) {
			document.getElementById("seventhTaxRate").innerHTML = taxBrackets.get(taxYear)[6].rate + '%';
			document.getElementById("seventhTax").innerHTML = '$' + taxBrackets.get(taxYear)[6].value.toLocaleString() + '+';
		}
		else {
			var seventhRow = table.insertRow(8);

			var valueCell = document.createElement("TH");
			valueCell.setAttribute("style", "text-align:center");
			var valueText = document.createElement("text");
			valueText.setAttribute("id", "seventhTax");
			valueText.setAttribute("class", "description");
			valueText.innerHTML = '$' + taxBrackets.get(taxYear)[6].value.toLocaleString() + '+';
			valueCell.appendChild(valueText);
			seventhRow.appendChild(valueCell);

			var rateCell = document.createElement("TH");
			rateCell.setAttribute("style", "text-align:center");
			var rateText = document.createElement("text");
			rateText.setAttribute("id", "seventhTaxRate");
			rateText.setAttribute("class", "description");
			rateText.innerHTML = taxBrackets.get(taxYear)[6].rate + '%';
			rateCell.appendChild(rateText);
			seventhRow.appendChild(rateCell);

			var rateCell2 = document.createElement("TH");
			rateCell2.setAttribute("style", "text-align:center");
			var rateText2 = document.createElement("text");
			rateText2.setAttribute("id", "seventhLongTermTaxRate");
			rateText2.setAttribute("class", "description");
			rateText2.innerHTML = "20%";
			rateCell2.appendChild(rateText2);
			seventhRow.appendChild(rateCell2);

			//var rateCell = seventhRow.insertCell(0);
			//var valueCell = seventhRow.insertCell(1);
			//rateCell.innerHTML = taxBrackets.get(taxYear)[6].rate + '%';
			//valueCell.innerHTML = '$' + taxBrackets.get(taxYear)[6].value.toLocaleString() + '+';
			//rateCell.setAttribute("class", "description");
			//valueCell.setAttribute("class", "description");
		}
	}
}

function calculateIncomeTax(gain, endYear) {

	tax = 0;

	if (gain <= taxBrackets.get(endYear)[0].value) {
		tax = gain * taxBrackets.get(endYear)[0].rate / 100;
		return tax;
	}

	for (var i = 5; i >= 0; --i) {
		if (gain > taxBrackets.get(endYear)[i].value) {
			tax = taxBrackets.get(endYear)[0].value * taxBrackets.get(endYear)[0].rate / 100;

			for (var j = 1; j <= i; ++j)
				tax += (taxBrackets.get(endYear)[j].value - taxBrackets.get(endYear)[j - 1].value)
					* taxBrackets.get(endYear)[j].rate / 100;

			remainder = gain - taxBrackets.get(endYear)[i].value;

			if (i + 1 >= taxBrackets.get(endYear).length)
				tax += remainder * taxBrackets.get(endYear)[i].rate / 100;
			else
				tax += remainder * taxBrackets.get(endYear)[i + 1].rate / 100;
			break;
		}
	}
	return tax;
}

function calculateLongTermTax(gain, endYear) {

	tax = 0;

	if (gain <= taxBrackets.get(endYear)[0].value)
		return tax;

	const longTermTaxRate = [0, 0, 0.15, 0.15, 0.15, 0.15, 0.2];

	for (var i = 6; i >= 0; --i) {
		if (i >= taxBrackets.get(endYear).length)
			continue;

		if (gain > taxBrackets.get(endYear)[i].value) {
			for (var j = 2; j <= i; ++j)
				tax += (taxBrackets.get(endYear)[j].value - taxBrackets.get(endYear)[j - 1].value)
					* longTermTaxRate[j];

			remainder = gain - taxBrackets.get(endYear)[i].value;

			if (i >= 6)
				tax += remainder * longTermTaxRate[i];
			else
				tax += remainder * longTermTaxRate[i + 1];
			break;
		}
	}
	return tax;
}

function outputTax(startMoney, endMoney, endDate) {

	const endYear = (new Date(endDate)).getFullYear();
	const gain = endMoney - startMoney;

	const incomeTaxResult = calculateIncomeTax(gain, endYear);
	const longTermTaxResult = calculateLongTermTax(gain, endYear);

	const incomeTaxResultFormatted = (Math.round(incomeTaxResult * 100) / 100).toLocaleString();
	const longTermTaxResultFormatted = (Math.round(longTermTaxResult * 100) / 100).toLocaleString();

	const taxPercentage1 = (Math.round((incomeTaxResult / gain) * 100 * 100) / 100).toLocaleString();
	const taxPercentage2 = (Math.round((longTermTaxResult / gain) * 100 * 100) / 100).toLocaleString();

	document.getElementById("incomeTaxResult").innerHTML = "&nbspIncome Tax : $" + incomeTaxResultFormatted + " (" + taxPercentage1 + "%)";
	document.getElementById("longTermTaxResult").innerHTML = "&nbspLong-term Capital Gains Tax : $" + longTermTaxResultFormatted + " (" + taxPercentage2 + "%)";

	document.getElementById("TaxYearSelect").value = endYear;
	changeTaxYear();
}

function clear() {
	svg.selectAll("*").remove();
	var elem = document.getElementById("companies");
	if (elem) elem.remove();
	indivPortfolio = [];
	stockInfo = [];
	volumeInfo = [];
}

const simulation = new Simulation();
document.getElementById("SimulationButton").disabled = true;
simulation.GetData().then(() => {
  /*    object format {history:[], 
                       ending_account_value:0,
                       account_percentage_gain:0,
                       max_drawdown_percentage:0,
                       average_daily_percentage:0,
                       stddev_daily_percentage:0,
                       yearly_percentage:0,
                       stddev_yearly_percentage:0,
                       sharpe_ratio:0
                      };*/
	d3.select("loading").remove();
	document.getElementById("SimulationButton").disabled = false;
	document.getElementById("startDate").setAttribute("onchange", "changeDate()");
	document.getElementById("startMoney").setAttribute("onchange", "changeMoney()");
	document.getElementById("TaxYearSelect").setAttribute("onchange", "changeTaxYear()");
});

function RunSimulating() {
	const method = document.getElementById("SimulationSelect").value;
	const methodCount = document.getElementById("SimulationSelect").length;
	const startDate = document.getElementById("startDate").value;
	const endDate = document.getElementById("endDate").value;
	const startMoney = parseInt(document.getElementById("startMoney").value);

	if (startDate && endDate && startMoney &&
		(method >= 0 || method < methodCount)) {
		document.getElementById("SimulationButton").disabled = true;
		const result = simulation.Run(startDate, endDate, startMoney, parseInt(method));
		document.getElementById("SimulationButton").disabled = false;
		document.getElementById("warningMsg").innerHTML = "";

		//Put d3 code in here.
		clear();
		drawSection();
		displayText(
			startMoney,
			result.ending_account_value,
			result.account_percentage_gain,
			result.yearly_percentage,
			result.stddev_yearly_percentage,
			result.max_drawdown_percentage,
			result.sharpe_ratio,
			result.lastday_sNp500);

		for (var i = 1; i < result.history.length; ++i) {
			var account = new Object();
			account.Date = new Date(result.history[i].date);
			account.account_value = result.history[i].daily_account;
			account.daily_gain = result.history[i].daily_percentage;
			account.buystocks = result.history[i].buystocks;
			indivPortfolio.push(account);
		}
		renderHistogram(indivPortfolio);
		renderLineChart(indivPortfolio);

		var firstFile = Array.from(simulation._AllData.values())[0];
		for (var [key, value] of firstFile.entries()) {
			var info = new Object();
			info.Date = new Date(key);
			info.Open = parseFloat(value.Open);
			info.High = parseFloat(value.High);
			info.Low = parseFloat(value.Low);
			info.Close = parseFloat(value.Close);
			stockInfo.push(info);

			var info2 = new Object();
			info2.Date = new Date(key);
			info2.Open = parseFloat(value.Open);
			info2.Close = parseFloat(value.Close);
			info2.Volume = parseInt(value.Volume);
			volumeInfo.push(info2);
		}
		renderCandlestick(stockInfo);
		renderVolumeChart(volumeInfo);
		dropdown();
		outputTax(startMoney, result.ending_account_value, endDate);
	}
	else {
		document.getElementById("warningMsg").innerHTML
			= "Start date, End date, Start money, and Strategy should be selected to start the simulation";
	}
}