/*
[00:00.000] 作词 : 沈以诚\n
[00:01.000] 作曲 : 沈以诚\n
[00:10.639]编曲：李星宇\n
[00:15.639]\n
[00:25.639]就像是那 灰色天空中的小雨\n
[00:31.638]下下停停 不动声色淋湿土地\n
[00:36.140]尽管总是阴晴不定\n
[00:38.887]但偶尔也会闪出星星\n
[00:42.137]这都是形容你的眼睛\n
[00:48.888]就像是那 古老城堡里的油画\n
[00:54.638]突然抬头 定格在黄昏的晚霞\n
[00:59.386]远看一片苍苍蒹葭\n
*/

//"[""]""."在正则中有特殊含义，需要转义
// 使用()来分组，\d表示数字，也可以使用[0-9]
// {2}表示要匹配两位，{2,3}表示匹配2位或3位
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
	const lyricStrings = lyricString.split("\n");

	let lyriclist = [];
	for (let line of lyricStrings) {
		if (line) {
			let result = parseExp.exec(line);
			if (!result) continue;
			const time1 = result[1] * 60 * 1000; //匹配第一个组是分钟数
			const time2 = result[2] * 1000; //匹配第二个是秒数
			const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10; //毫秒数为2位或3位

			const time = time1 + time2 + time3;

			// 使用空字符串替换掉匹配的时间，剩下的就是歌词
			const content = line.replace(parseExp, "").trim();
			const lyric = { time, content };
			lyriclist.push(lyric);
		}
	}
	return lyriclist;
}
