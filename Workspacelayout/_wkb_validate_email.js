/*****************************************
		Email Validator
Author:	 William K. Bowersox
Release: 1.0
Date: 	 07/29/2014
Description:
	This email validator is an early release due to not being able to find
	comprehensive clientside validation solution.
	
	The Top Level domain array's information is taken from
		-http://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
		-Retrived: 07/25/2014
*****************************************/
var _wkb_val_TLD = [];

_wkb_val_TLD[0] = ".com";
_wkb_val_TLD[1] = ".org";
_wkb_val_TLD[2] = ".net";
_wkb_val_TLD[3] = ".int";
_wkb_val_TLD[4] = ".edu";
_wkb_val_TLD[5] = ".gov";
_wkb_val_TLD[6] = ".mil";
_wkb_val_TLD[7] = ".arpa";
_wkb_val_TLD[8] = ".ac";
_wkb_val_TLD[9] = ".ad";
_wkb_val_TLD[10] = ".ae";
_wkb_val_TLD[11] = ".af";
_wkb_val_TLD[12] = ".ag";
_wkb_val_TLD[13] = ".ai";
_wkb_val_TLD[14] = ".al";
_wkb_val_TLD[15] = ".am";
_wkb_val_TLD[16] = ".an";
_wkb_val_TLD[17] = ".ao";
_wkb_val_TLD[18] = ".aq";
_wkb_val_TLD[19] = ".ar";
_wkb_val_TLD[20] = ".as";
_wkb_val_TLD[21] = ".at";
_wkb_val_TLD[22] = ".au";
_wkb_val_TLD[23] = ".aw";
_wkb_val_TLD[24] = ".ax";
_wkb_val_TLD[25] = ".az";
_wkb_val_TLD[26] = ".ba";
_wkb_val_TLD[27] = ".bb";
_wkb_val_TLD[28] = ".bd";
_wkb_val_TLD[29] = ".be";
_wkb_val_TLD[30] = ".bf";
_wkb_val_TLD[31] = ".bg";
_wkb_val_TLD[32] = ".bh";
_wkb_val_TLD[33] = ".bi";
_wkb_val_TLD[34] = ".bj";
_wkb_val_TLD[35] = ".bm";
_wkb_val_TLD[36] = ".bn";
_wkb_val_TLD[37] = ".bo";
_wkb_val_TLD[38] = ".br";
_wkb_val_TLD[39] = ".bs";
_wkb_val_TLD[40] = ".bt";
_wkb_val_TLD[41] = ".bv";
_wkb_val_TLD[42] = ".bw";
_wkb_val_TLD[43] = ".by";
_wkb_val_TLD[44] = ".bz";
_wkb_val_TLD[45] = ".ca";
_wkb_val_TLD[46] = ".cc";
_wkb_val_TLD[47] = ".cd";
_wkb_val_TLD[48] = ".cf";
_wkb_val_TLD[49] = ".cg";
_wkb_val_TLD[50] = ".ch";
_wkb_val_TLD[51] = ".ci";
_wkb_val_TLD[52] = ".ck";
_wkb_val_TLD[53] = ".cl";
_wkb_val_TLD[54] = ".cm";
_wkb_val_TLD[55] = ".cn";
_wkb_val_TLD[56] = ".co";
_wkb_val_TLD[57] = ".cr";
_wkb_val_TLD[58] = ".cs";
_wkb_val_TLD[59] = ".cu";
_wkb_val_TLD[60] = ".cv";
_wkb_val_TLD[61] = ".cw";
_wkb_val_TLD[62] = ".cx";
_wkb_val_TLD[63] = ".cy";
_wkb_val_TLD[64] = ".cz";
_wkb_val_TLD[65] = ".dd";
_wkb_val_TLD[66] = ".de";
_wkb_val_TLD[67] = ".dj";
_wkb_val_TLD[68] = ".dk";
_wkb_val_TLD[69] = ".dm";
_wkb_val_TLD[70] = ".do";
_wkb_val_TLD[71] = ".dz";
_wkb_val_TLD[72] = ".ec";
_wkb_val_TLD[73] = ".ee";
_wkb_val_TLD[74] = ".eg";
_wkb_val_TLD[75] = ".eh";
_wkb_val_TLD[76] = ".er";
_wkb_val_TLD[77] = ".es";
_wkb_val_TLD[78] = ".et";
_wkb_val_TLD[79] = ".eu";
_wkb_val_TLD[80] = ".fi";
_wkb_val_TLD[81] = ".fj";
_wkb_val_TLD[82] = ".fk";
_wkb_val_TLD[83] = ".fm";
_wkb_val_TLD[84] = ".fo";
_wkb_val_TLD[85] = ".fr";
_wkb_val_TLD[86] = ".ga";
_wkb_val_TLD[87] = ".gb";
_wkb_val_TLD[88] = ".gd";
_wkb_val_TLD[89] = ".ge";
_wkb_val_TLD[90] = ".gf";
_wkb_val_TLD[91] = ".gg";
_wkb_val_TLD[92] = ".gh";
_wkb_val_TLD[93] = ".gi";
_wkb_val_TLD[94] = ".gl";
_wkb_val_TLD[95] = ".gm";
_wkb_val_TLD[96] = ".gn";
_wkb_val_TLD[97] = ".gp";
_wkb_val_TLD[98] = ".gq";
_wkb_val_TLD[99] = ".gr";
_wkb_val_TLD[100] = ".gs";
_wkb_val_TLD[101] = ".gt";
_wkb_val_TLD[102] = ".gu";
_wkb_val_TLD[103] = ".gw";
_wkb_val_TLD[104] = ".gy";
_wkb_val_TLD[105] = ".hk";
_wkb_val_TLD[106] = ".hm";
_wkb_val_TLD[107] = ".hn";
_wkb_val_TLD[108] = ".hr";
_wkb_val_TLD[109] = ".ht";
_wkb_val_TLD[110] = ".hu";
_wkb_val_TLD[111] = ".id";
_wkb_val_TLD[112] = ".ie";
_wkb_val_TLD[113] = ".il";
_wkb_val_TLD[114] = ".im";
_wkb_val_TLD[115] = ".in";
_wkb_val_TLD[116] = ".io";
_wkb_val_TLD[117] = ".iq";
_wkb_val_TLD[118] = ".ir";
_wkb_val_TLD[119] = ".is";
_wkb_val_TLD[120] = ".it";
_wkb_val_TLD[121] = ".je";
_wkb_val_TLD[122] = ".jm";
_wkb_val_TLD[123] = ".jo";
_wkb_val_TLD[124] = ".jp";
_wkb_val_TLD[125] = ".ke";
_wkb_val_TLD[126] = ".kg";
_wkb_val_TLD[127] = ".kh";
_wkb_val_TLD[128] = ".ki";
_wkb_val_TLD[129] = ".km";
_wkb_val_TLD[130] = ".kn";
_wkb_val_TLD[131] = ".kp";
_wkb_val_TLD[132] = ".kr";
_wkb_val_TLD[133] = ".kw";
_wkb_val_TLD[134] = ".ky";
_wkb_val_TLD[135] = ".kz";
_wkb_val_TLD[136] = ".la";
_wkb_val_TLD[137] = ".lb";
_wkb_val_TLD[138] = ".lc";
_wkb_val_TLD[139] = ".li";
_wkb_val_TLD[140] = ".lk";
_wkb_val_TLD[141] = ".lr";
_wkb_val_TLD[142] = ".ls";
_wkb_val_TLD[143] = ".lt";
_wkb_val_TLD[144] = ".lu";
_wkb_val_TLD[145] = ".lv";
_wkb_val_TLD[146] = ".ly";
_wkb_val_TLD[147] = ".ma";
_wkb_val_TLD[148] = ".mc";
_wkb_val_TLD[149] = ".md";
_wkb_val_TLD[150] = ".me";
_wkb_val_TLD[151] = ".mg";
_wkb_val_TLD[152] = ".mh";
_wkb_val_TLD[153] = ".mk";
_wkb_val_TLD[154] = ".ml";
_wkb_val_TLD[155] = ".mm";
_wkb_val_TLD[156] = ".mn";
_wkb_val_TLD[157] = ".mo";
_wkb_val_TLD[158] = ".mp";
_wkb_val_TLD[159] = ".mq";
_wkb_val_TLD[160] = ".mr";
_wkb_val_TLD[161] = ".ms";
_wkb_val_TLD[162] = ".mt";
_wkb_val_TLD[163] = ".mu";
_wkb_val_TLD[164] = ".mv";
_wkb_val_TLD[165] = ".mw";
_wkb_val_TLD[166] = ".mx";
_wkb_val_TLD[167] = ".my";
_wkb_val_TLD[168] = ".mz";
_wkb_val_TLD[169] = ".na";
_wkb_val_TLD[170] = ".nc";
_wkb_val_TLD[171] = ".ne";
_wkb_val_TLD[172] = ".nf";
_wkb_val_TLD[173] = ".ng";
_wkb_val_TLD[174] = ".ni";
_wkb_val_TLD[175] = ".nl";
_wkb_val_TLD[176] = ".no";
_wkb_val_TLD[177] = ".np";
_wkb_val_TLD[178] = ".nr";
_wkb_val_TLD[179] = ".nu";
_wkb_val_TLD[180] = ".nz";
_wkb_val_TLD[181] = ".om";
_wkb_val_TLD[182] = ".pa";
_wkb_val_TLD[183] = ".pe";
_wkb_val_TLD[184] = ".pf";
_wkb_val_TLD[185] = ".pg";
_wkb_val_TLD[186] = ".ph";
_wkb_val_TLD[187] = ".pk";
_wkb_val_TLD[188] = ".pl";
_wkb_val_TLD[189] = ".pm";
_wkb_val_TLD[190] = ".pn";
_wkb_val_TLD[191] = ".pr";
_wkb_val_TLD[192] = ".ps";
_wkb_val_TLD[193] = ".pt";
_wkb_val_TLD[194] = ".pw";
_wkb_val_TLD[195] = ".py";
_wkb_val_TLD[196] = ".qa";
_wkb_val_TLD[197] = ".re";
_wkb_val_TLD[198] = ".ro";
_wkb_val_TLD[199] = ".rs";
_wkb_val_TLD[200] = ".ru";
_wkb_val_TLD[201] = ".rw";
_wkb_val_TLD[202] = ".sa";
_wkb_val_TLD[203] = ".sb";
_wkb_val_TLD[204] = ".sc";
_wkb_val_TLD[205] = ".sd";
_wkb_val_TLD[206] = ".se";
_wkb_val_TLD[207] = ".sg";
_wkb_val_TLD[208] = ".sh";
_wkb_val_TLD[209] = ".si";
_wkb_val_TLD[210] = ".sj";
_wkb_val_TLD[211] = ".sk";
_wkb_val_TLD[212] = ".sl";
_wkb_val_TLD[213] = ".sm";
_wkb_val_TLD[214] = ".sn";
_wkb_val_TLD[215] = ".so";
_wkb_val_TLD[216] = ".sr";
_wkb_val_TLD[217] = ".ss";
_wkb_val_TLD[218] = ".st";
_wkb_val_TLD[219] = ".su";
_wkb_val_TLD[220] = ".sv";
_wkb_val_TLD[221] = ".sx";
_wkb_val_TLD[222] = ".sy";
_wkb_val_TLD[223] = ".sz";
_wkb_val_TLD[224] = ".tc";
_wkb_val_TLD[225] = ".td";
_wkb_val_TLD[226] = ".tf";
_wkb_val_TLD[227] = ".tg";
_wkb_val_TLD[228] = ".th";
_wkb_val_TLD[229] = ".tj";
_wkb_val_TLD[230] = ".tk";
_wkb_val_TLD[231] = ".tl";
_wkb_val_TLD[232] = ".tm";
_wkb_val_TLD[233] = ".tn";
_wkb_val_TLD[234] = ".to";
_wkb_val_TLD[235] = ".tp";
_wkb_val_TLD[236] = ".tr";
_wkb_val_TLD[237] = ".tt";
_wkb_val_TLD[238] = ".tv";
_wkb_val_TLD[239] = ".tw";
_wkb_val_TLD[240] = ".tz";
_wkb_val_TLD[241] = ".ua";
_wkb_val_TLD[242] = ".ug";
_wkb_val_TLD[243] = ".uk";
_wkb_val_TLD[244] = ".us";
_wkb_val_TLD[245] = ".uy";
_wkb_val_TLD[246] = ".va";
_wkb_val_TLD[247] = ".vc";
_wkb_val_TLD[248] = ".ve";
_wkb_val_TLD[249] = ".vg";
_wkb_val_TLD[250] = ".vi";
_wkb_val_TLD[251] = ".vn";
_wkb_val_TLD[252] = ".vu";
_wkb_val_TLD[253] = ".wf";
_wkb_val_TLD[254] = ".ws";
_wkb_val_TLD[255] = ".ye";
_wkb_val_TLD[256] = ".yt";
_wkb_val_TLD[257] = ".yu";
_wkb_val_TLD[258] = ".za";
_wkb_val_TLD[259] = ".zm";
_wkb_val_TLD[260] = ".zw";
_wkb_val_TLD[261] = ".academy";
_wkb_val_TLD[262] = ".aero";
_wkb_val_TLD[263] = ".agency";
_wkb_val_TLD[264] = ".associates";
_wkb_val_TLD[265] = ".bar";
_wkb_val_TLD[266] = ".bargains";
_wkb_val_TLD[267] = ".bid";
_wkb_val_TLD[268] = ".bike";
_wkb_val_TLD[269] = ".biz";
_wkb_val_TLD[270] = ".blackfriday";
_wkb_val_TLD[271] = ".blue";
_wkb_val_TLD[272] = ".boutique";
_wkb_val_TLD[273] = ".build";
_wkb_val_TLD[274] = ".builders";
_wkb_val_TLD[275] = ".buzz";
_wkb_val_TLD[276] = ".cab";
_wkb_val_TLD[277] = ".camera";
_wkb_val_TLD[278] = ".camp";
_wkb_val_TLD[279] = ".capital";
_wkb_val_TLD[280] = ".cards";
_wkb_val_TLD[281] = ".catering";
_wkb_val_TLD[282] = ".careers";
_wkb_val_TLD[283] = ".center";
_wkb_val_TLD[284] = ".ceo";
_wkb_val_TLD[285] = ".cheap";
_wkb_val_TLD[286] = ".christmas";
_wkb_val_TLD[287] = ".cleaning";
_wkb_val_TLD[288] = ".clothing";
_wkb_val_TLD[289] = ".club";
_wkb_val_TLD[290] = ".codes";
_wkb_val_TLD[291] = ".coffee";
_wkb_val_TLD[292] = ".community";
_wkb_val_TLD[293] = ".company";
_wkb_val_TLD[294] = ".computer";
_wkb_val_TLD[295] = ".condos";
_wkb_val_TLD[296] = ".construction";
_wkb_val_TLD[297] = ".consulting";
_wkb_val_TLD[298] = ".contractors";
_wkb_val_TLD[299] = ".cool";
_wkb_val_TLD[300] = ".coop";
_wkb_val_TLD[301] = ".cruises";
_wkb_val_TLD[302] = ".dance";
_wkb_val_TLD[303] = ".dating";
_wkb_val_TLD[304] = ".democrat";
_wkb_val_TLD[305] = ".diamonds";
_wkb_val_TLD[306] = ".directory";
_wkb_val_TLD[307] = ".domains";
_wkb_val_TLD[308] = ".education";
_wkb_val_TLD[309] = ".email";
_wkb_val_TLD[310] = ".engineering";
_wkb_val_TLD[311] = ".enterprises";
_wkb_val_TLD[312] = ".equipment";
_wkb_val_TLD[313] = ".estate";
_wkb_val_TLD[314] = ".eus";
_wkb_val_TLD[315] = ".events";
_wkb_val_TLD[316] = ".exchange";
_wkb_val_TLD[317] = ".expert";
_wkb_val_TLD[318] = ".farm";
_wkb_val_TLD[319] = ".fish";
_wkb_val_TLD[320] = ".flights";
_wkb_val_TLD[321] = ".florist";
_wkb_val_TLD[322] = ".foo";
_wkb_val_TLD[323] = ".futbol";
_wkb_val_TLD[324] = ".gallery";
_wkb_val_TLD[325] = ".gift";
_wkb_val_TLD[326] = ".glass";
_wkb_val_TLD[327] = ".graphics";
_wkb_val_TLD[328] = ".gripe";
_wkb_val_TLD[329] = ".guitars";
_wkb_val_TLD[330] = ".guru";
_wkb_val_TLD[331] = ".holdings";
_wkb_val_TLD[332] = ".holiday";
_wkb_val_TLD[333] = ".house";
_wkb_val_TLD[334] = ".immobilien";
_wkb_val_TLD[335] = ".industries";
_wkb_val_TLD[336] = ".info";
_wkb_val_TLD[337] = ".ink";
_wkb_val_TLD[338] = ".institute";
_wkb_val_TLD[339] = ".international";
_wkb_val_TLD[340] = ".jetzt";
_wkb_val_TLD[341] = ".jobs";
_wkb_val_TLD[342] = ".kaufen";
_wkb_val_TLD[343] = ".kitchen";
_wkb_val_TLD[344] = ".kim";
_wkb_val_TLD[345] = ".land";
_wkb_val_TLD[346] = ".lease";
_wkb_val_TLD[347] = ".lighting";
_wkb_val_TLD[348] = ".limo";
_wkb_val_TLD[349] = ".link";
_wkb_val_TLD[350] = ".maison";
_wkb_val_TLD[351] = ".marketing";
_wkb_val_TLD[352] = ".media";
_wkb_val_TLD[353] = ".menu";
_wkb_val_TLD[354] = ".mobi";
_wkb_val_TLD[355] = ".moda";
_wkb_val_TLD[356] = ".moe";
_wkb_val_TLD[357] = ".museum";
_wkb_val_TLD[358] = ".name";
_wkb_val_TLD[359] = ".ninja";
_wkb_val_TLD[360] = ".onl";
_wkb_val_TLD[361] = ".partners";
_wkb_val_TLD[362] = ".parts";
_wkb_val_TLD[363] = ".photo";
_wkb_val_TLD[364] = ".photography";
_wkb_val_TLD[365] = ".photos";
_wkb_val_TLD[366] = ".pics";
_wkb_val_TLD[367] = ".pictures";
_wkb_val_TLD[368] = ".pink";
_wkb_val_TLD[369] = ".plumbing";
_wkb_val_TLD[370] = ".post";
_wkb_val_TLD[371] = ".pro";
_wkb_val_TLD[372] = ".productions";
_wkb_val_TLD[373] = ".products";
_wkb_val_TLD[374] = ".properties";
_wkb_val_TLD[375] = ".pub";
_wkb_val_TLD[376] = ".recipes";
_wkb_val_TLD[377] = ".red";
_wkb_val_TLD[378] = ".reisen";
_wkb_val_TLD[379] = ".rentals";
_wkb_val_TLD[380] = ".repair";
_wkb_val_TLD[381] = ".report";
_wkb_val_TLD[382] = ".rest";
_wkb_val_TLD[383] = ".reviews";
_wkb_val_TLD[384] = ".rich";
_wkb_val_TLD[385] = ".services";
_wkb_val_TLD[386] = ".sexy";
_wkb_val_TLD[387] = ".shiksha";
_wkb_val_TLD[388] = ".shoes";
_wkb_val_TLD[389] = ".singles";
_wkb_val_TLD[390] = ".social";
_wkb_val_TLD[391] = ".solar";
_wkb_val_TLD[392] = ".solutions";
_wkb_val_TLD[393] = ".space";
_wkb_val_TLD[394] = ".supplies";
_wkb_val_TLD[395] = ".supply";
_wkb_val_TLD[396] = ".support";
_wkb_val_TLD[397] = ".systems";
_wkb_val_TLD[398] = ".tattoo";
_wkb_val_TLD[399] = ".technology";
_wkb_val_TLD[400] = ".tel";
_wkb_val_TLD[401] = ".tienda";
_wkb_val_TLD[402] = ".tips";
_wkb_val_TLD[403] = ".today";
_wkb_val_TLD[404] = ".tools";
_wkb_val_TLD[405] = ".town";
_wkb_val_TLD[406] = ".toys";
_wkb_val_TLD[407] = ".trade";
_wkb_val_TLD[408] = ".training";
_wkb_val_TLD[409] = ".travel";
_wkb_val_TLD[410] = ".university";
_wkb_val_TLD[411] = ".uno";
_wkb_val_TLD[412] = ".vacations";
_wkb_val_TLD[413] = ".ventures";
_wkb_val_TLD[414] = ".viajes";
_wkb_val_TLD[415] = ".villas";
_wkb_val_TLD[416] = ".vision";
_wkb_val_TLD[417] = ".voting";
_wkb_val_TLD[418] = ".vision";
_wkb_val_TLD[419] = ".voting";
_wkb_val_TLD[420] = ".voyage";
_wkb_val_TLD[421] = ".watch";
_wkb_val_TLD[422] = ".webcam";
_wkb_val_TLD[423] = ".wed";
_wkb_val_TLD[424] = ".wiki";
_wkb_val_TLD[425] = ".works";
_wkb_val_TLD[426] = ".xxx";
_wkb_val_TLD[427] = ".xyz";
_wkb_val_TLD[428] = ".zone";
_wkb_val_TLD[429] = ".みんな";
_wkb_val_TLD[430] = ".在线";
_wkb_val_TLD[431] = ".中文网";
_wkb_val_TLD[432] = ".移动";
_wkb_val_TLD[433] = ".asia";
_wkb_val_TLD[434] = ".berlin";
_wkb_val_TLD[435] = ".cat";
_wkb_val_TLD[436] = ".gal";
_wkb_val_TLD[437] = ".kiwi";
_wkb_val_TLD[438] = ".london";
_wkb_val_TLD[439] = ".nagoya";
_wkb_val_TLD[440] = ".nyc";
_wkb_val_TLD[441] = ".paris";
_wkb_val_TLD[442] = ".tokyo";
_wkb_val_TLD[443] = ".wien";
_wkb_val_TLD[444] = ".axa";
_wkb_val_TLD[445] = ".bmw";
_wkb_val_TLD[446] = ".citic";
_wkb_val_TLD[447] = ".mini";
_wkb_val_TLD[448] = ".monash";
_wkb_val_TLD[449] = ".neustar";
_wkb_val_TLD[450] = ".yandex";
_wkb_val_TLD[451] = ".中信";



function _validate_TDL(e_string){
	var _length = parseInt(_wkb_val_TLD.length);
	var s_pos = -1; s_extract = "";
	for(var i=0; i < _length; i++){
		s_pos=e_string.indexOf(_wkb_val_TLD[i]);
		if(s_pos !=- 1){
			for(j=s_pos;j<e_string.length;j++){
				s_extract += e_string.charAt(j);
			}
			if(s_extract == _wkb_val_TLD[i])return 1;
		}
		
	}
	alert("An e-mail must have a vaild Top level domain: ex) .com|.edu");
	return 0;
}


function _known_invalid_TDL_email_combo(e_string){
	var e_string = e_string.substring(e_string.search("gmail"),e_string.length);
	if((e_string.search("gmail") > -1 ||
		e_string.search("yahoo") > -1 ||
		e_string.search("hotmail") > -1 ||
		e_string.search("legionauts") > -1) &&
		e_string.search(".com")==-1){alert("Your email accounts requires a '.com' Top Level Domain");return 0;}
	
	if((e_string.search("bgsu") > -1 ||
		e_string.search("owens") > -1 ||
		e_string.search("utoledo") > -1) &&
		e_string.search(".edu")==-1){alert("Your email accounts requires a '.edu' Top Level Domain");return 0;}
	
	if((e_string.search("promedica") > -1) &&
		e_string.search(".org")==-1){alert("Your email accounts requires a '.org' Top Level Domain");return 0;}

	else return 1;
}

function _validate_email(e_string){

	var err = 0;/*To keep track of errors*/

	/*If '@' does not exsist; log error and move on to next test.*/
	if(e_string.search("@") == -1){err++; alert("An email must have an '@' character");}
	
	/*If there is not a valid Top Level domain; log error and move on*/
	if(parseInt(_validate_TDL(e_string))==0)err++;

	/*If there is a known imcompatible carrier and TDL combo; log error*/
	if(_known_invalid_TDL_email_combo(e_string) == 0)err++;

	/*Let calling function know whether this is a valid email or not. To the extent that can be done before sending an email*/
	if(err == 0)return true;
	
	return false;/*In case of errors*/
}
