import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
	currentSong: {},
	currentSongIndex: 0,
	playlist: [
		{
			name: "飞云之下",
			id: 1313558307,
			pst: 0,
			t: 0,
			ar: [
				{
					id: 28391567,
					name: "翁锡麒",
					tns: [],
					alias: [],
				},
				{
					id: 28389560,
					name: "翁锡麟",
					tns: [],
					alias: [],
				},
			],
			alia: [],
			pop: 100,
			st: 0,
			rt: null,
			fee: 0,
			v: 10,
			crbt: null,
			cf: "",
			al: {
				id: 73471027,
				name: "中国新声代 第五季 第十期",
				picUrl:
					"https://p1.music.126.net/oSEHDeNE5yQ0Z0RHmY8v3Q==/109951163575510268.jpg",
				tns: [],
				pic_str: "109951163575510268",
				pic: 109951163575510270,
			},
			dt: 248500,
			h: {
				br: 320000,
				fid: 0,
				size: 9942248,
				vd: -33200,
			},
			m: {
				br: 192000,
				fid: 0,
				size: 5965366,
				vd: -30600,
			},
			l: {
				br: 128000,
				fid: 0,
				size: 3976925,
				vd: -29000,
			},
			a: null,
			cd: "01",
			no: 1,
			rtUrl: null,
			ftype: 0,
			rtUrls: [],
			djId: 0,
			copyright: 2,
			s_id: 0,
			mark: 0,
			originCoverType: 0,
			originSongSimpleData: null,
			resourceState: true,
			single: 0,
			noCopyrightRcmd: null,
			mv: 0,
			mst: 9,
			rtype: 0,
			cp: 0,
			rurl: null,
			publishTime: 1538150400007,
		},
		{
			name: "不得不爱",
			id: 139764,
			pst: 0,
			t: 0,
			ar: [
				{
					id: 4723,
					name: "潘玮柏",
					tns: [],
					alias: [],
				},
				{
					id: 9939,
					name: "弦子",
					tns: [],
					alias: [],
				},
			],
			alia: [],
			pop: 100,
			st: 0,
			rt: "",
			fee: 8,
			v: 39,
			crbt: null,
			cf: "",
			al: {
				id: 13933,
				name: "高手",
				picUrl:
					"https://p1.music.126.net/INvCpYVCXacWAKuW83wPkQ==/109951165547357444.jpg",
				tns: [],
				pic_str: "109951165547357444",
				pic: 109951165547357440,
			},
			dt: 279413,
			h: {
				br: 320000,
				fid: 0,
				size: 11179407,
				vd: -42374,
			},
			m: {
				br: 192000,
				fid: 0,
				size: 6707662,
				vd: -39781,
			},
			l: {
				br: 128000,
				fid: 0,
				size: 4471789,
				vd: -38074,
			},
			a: null,
			cd: "1",
			no: 2,
			rtUrl: null,
			ftype: 0,
			rtUrls: [],
			djId: 0,
			copyright: 2,
			s_id: 0,
			mark: 8192,
			originCoverType: 1,
			originSongSimpleData: null,
			resourceState: true,
			single: 0,
			noCopyrightRcmd: null,
			mv: 0,
			rtype: 0,
			rurl: null,
			mst: 9,
			cp: 7003,
			publishTime: 1120147200000,
		},
		{
			name: "Señorita",
			id: 1382340352,
			pst: 0,
			t: 0,
			ar: [
				{
					id: 37962,
					name: "Kurt Hugo Schneider",
					tns: [],
					alias: [],
				},
				{
					id: 69270,
					name: "MADILYN",
					tns: [],
					alias: [],
				},
			],
			alia: [],
			pop: 100,
			st: 0,
			rt: "",
			fee: 0,
			v: 6,
			crbt: null,
			cf: "",
			al: {
				id: 80793558,
				name: "Señorita",
				picUrl:
					"https://p1.music.126.net/Vvp76dd-A_-az31xabT7_Q==/109951164268549427.jpg",
				tns: [],
				pic_str: "109951164268549427",
				pic: 109951164268549420,
			},
			dt: 163654,
			h: {
				br: 320000,
				fid: 0,
				size: 6547374,
				vd: -40851,
			},
			m: {
				br: 192000,
				fid: 0,
				size: 3928442,
				vd: -38242,
			},
			l: {
				br: 128000,
				fid: 0,
				size: 2618976,
				vd: -36496,
			},
			a: null,
			cd: "01",
			no: 0,
			rtUrl: null,
			ftype: 0,
			rtUrls: [],
			djId: 0,
			copyright: 0,
			s_id: 0,
			mark: 262144,
			originCoverType: 0,
			originSongSimpleData: null,
			resourceState: true,
			single: 0,
			noCopyrightRcmd: null,
			mst: 9,
			cp: 0,
			mv: 10881420,
			rtype: 0,
			rurl: null,
			publishTime: 0,
		},
	],
	sequence: 0, //0:循环 1:随机播放 2:单曲循环
	lyricList:[],
	currentLyricIndex:-1
});

function reducer(state = defaultState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_CURRENT_SONG:
			return state.set("currentSong", action.currentSong);
		case actionTypes.CHANGE_CURRENT_SONG_INDEX:
			return state.set("currentSongIndex", action.currentSongIndex);
		case actionTypes.CHANGE_PLAY_LIST:
			return state.set("playlist", action.playlist);
		case actionTypes.CHANGE_SEQUENCE:
			return state.set("sequence", action.sequence);
		case actionTypes.CHANGE_LYRIC_LIST:
			return state.set("lyricList",action.lyricList);
		case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
			return state.set("currentLyricIndex",action.index);
		default:
			return state;
	}
}

export default reducer;
