const BASE_MOVIES = [
  {id:1,primaryGenre:"코미디",title:"극한직업",genres:["코미디","액션"],year:2019,runtime:111,rating:8.1,moods:["funny","exciting"],companions:["friends","family"],popularity:95,hidden:false,description:"낮에는 치킨집, 밤에는 잠복근무를 하는 형사들이 예상 밖의 성공과 사건을 동시에 마주하는 유쾌한 액션 코미디입니다."},
  {id:2,primaryGenre:"액션",title:"가디언즈 오브 갤럭시",genres:["액션","SF","모험"],year:2014,runtime:121,rating:7.8,moods:["exciting","funny"],companions:["friends","family"],popularity:94,hidden:false,description:"서로 어울릴 것 같지 않은 우주 영웅들이 팀을 이루며 은하계를 누비는 빠르고 신나는 모험입니다."},
  {id:3,primaryGenre:"애니메이션",title:"주토피아",genres:["애니메이션","코미디","가족"],year:2016,runtime:108,rating:8.0,moods:["relaxing","funny","thoughtful"],companions:["family","friends"],popularity:93,hidden:false,description:"다양한 동물이 살아가는 거대한 도시에서 토끼 경찰과 여우가 함께 사건을 해결하는 따뜻하고 재치 있는 이야기입니다."},
  {id:4,primaryGenre:"코미디",title:"미쓰 와이프",genres:["코미디","드라마","가족"],year:2015,runtime:125,rating:7.2,moods:["emotional","funny"],companions:["family","couple"],popularity:70,hidden:true,description:"전혀 다른 삶을 살게 된 주인공이 가족과 일상의 소중함을 발견하는 유쾌하고 따뜻한 드라마입니다."},
  {id:5,primaryGenre:"로맨스",title:"라라랜드",genres:["로맨스","음악","드라마"],year:2016,runtime:128,rating:8.6,moods:["emotional","relaxing"],companions:["couple","alone"],popularity:98,hidden:false,description:"꿈을 좇는 두 청춘이 사랑과 현실 사이에서 선택하는 과정을 아름다운 음악과 색감으로 그려냅니다."},
  {id:6,primaryGenre:"애니메이션",title:"인사이드 아웃",genres:["애니메이션","드라마","가족"],year:2015,runtime:95,rating:8.9,moods:["thoughtful","emotional","relaxing"],companions:["family","alone"],popularity:99,hidden:false,description:"한 소녀의 머릿속 감정들이 변화와 성장을 받아들이는 과정을 따뜻하고 창의적으로 보여줍니다."},
  {id:7,primaryGenre:"SF",title:"인터스텔라",genres:["SF","드라마","모험"],year:2014,runtime:169,rating:8.6,moods:["thoughtful","emotional","exciting"],companions:["alone","friends"],popularity:99,hidden:false,description:"인류의 미래를 위해 우주로 떠난 탐험대가 시간과 사랑, 생존의 의미를 마주하는 장대한 SF 드라마입니다."},
  {id:8,primaryGenre:"미스터리",title:"나이브스 아웃",genres:["미스터리","범죄","코미디"],year:2019,runtime:130,rating:8.1,moods:["tense","thoughtful","funny"],companions:["friends","couple"],popularity:91,hidden:false,description:"유명 작가의 죽음을 둘러싼 가족들의 비밀을 탐정이 하나씩 파헤치는 재치 있는 미스터리입니다."},
  {id:9,primaryGenre:"애니메이션",title:"코코",genres:["애니메이션","가족","음악"],year:2017,runtime:105,rating:8.7,moods:["emotional","relaxing"],companions:["family","alone"],popularity:96,hidden:false,description:"음악을 사랑하는 소년이 신비로운 세계를 여행하며 가족의 기억과 사랑을 발견하는 감동적인 이야기입니다."},
  {id:10,primaryGenre:"코미디",title:"패딩턴 2",genres:["가족","코미디","모험"],year:2017,runtime:103,rating:8.4,moods:["funny","relaxing"],companions:["family","friends"],popularity:75,hidden:true,description:"친절한 곰 패딩턴이 소중한 선물을 구하려다 새로운 소동에 휘말리는 사랑스럽고 유쾌한 가족 영화입니다."},
  {id:11,primaryGenre:"액션",title:"매드맥스: 분노의 도로",genres:["액션","모험","SF"],year:2015,runtime:120,rating:8.2,moods:["exciting","tense"],companions:["friends","alone"],popularity:95,hidden:false,description:"황폐한 세계를 질주하는 생존자들이 자유를 위해 숨 돌릴 틈 없는 추격전을 벌입니다."},
  {id:12,primaryGenre:"액션",title:"탑건: 매버릭",genres:["액션","드라마"],year:2022,runtime:131,rating:8.5,moods:["exciting","emotional"],companions:["friends","family"],popularity:98,hidden:false,description:"전설적인 조종사가 새로운 세대와 함께 극한의 임무에 도전하며 책임과 용기를 보여주는 항공 액션입니다."},
  {id:13,primaryGenre:"드라마",title:"리틀 포레스트",genres:["드라마","힐링"],year:2018,runtime:103,rating:8.3,moods:["relaxing","emotional"],companions:["alone","family"],popularity:82,hidden:true,description:"도시 생활에 지친 주인공이 고향의 사계절과 음식, 사람들 속에서 자신만의 속도를 되찾습니다."},
  {id:14,primaryGenre:"코미디",title:"월터의 상상은 현실이 된다",genres:["모험","코미디","드라마"],year:2013,runtime:114,rating:7.9,moods:["relaxing","exciting","thoughtful"],companions:["alone","friends"],popularity:78,hidden:true,description:"평범한 일상 속에서 상상만 하던 남자가 뜻밖의 여행을 시작하며 스스로의 가능성을 발견합니다."},
  {id:15,primaryGenre:"로맨스",title:"어바웃 타임",genres:["로맨스","코미디","드라마"],year:2013,runtime:123,rating:8.7,moods:["emotional","funny","relaxing"],companions:["couple","alone"],popularity:97,hidden:false,description:"시간을 되돌릴 수 있는 남자가 사랑과 가족을 통해 평범한 하루의 소중함을 배워가는 로맨스입니다."},
  {id:16,primaryGenre:"애니메이션",title:"소울",genres:["애니메이션","드라마","음악"],year:2020,runtime:100,rating:8.3,moods:["thoughtful","relaxing","emotional"],companions:["alone","family"],popularity:90,hidden:false,description:"꿈만 바라보던 음악 교사가 삶의 작은 순간과 존재의 의미를 새롭게 발견하는 따뜻한 애니메이션입니다."},
  {id:17,primaryGenre:"SF",title:"컨택트",genres:["SF","드라마","미스터리"],year:2016,runtime:116,rating:8.2,moods:["thoughtful","tense","emotional"],companions:["alone","couple"],popularity:86,hidden:true,description:"언어학자가 미지의 존재와 소통하며 시간과 선택에 관한 놀라운 진실을 마주하는 지적인 SF 드라마입니다."},
  {id:18,primaryGenre:"공포",title:"겟 아웃",genres:["공포","스릴러","미스터리"],year:2017,runtime:104,rating:8.0,moods:["tense","thoughtful"],companions:["friends","couple"],popularity:92,hidden:false,description:"연인의 가족을 만나러 간 남자가 이상한 분위기 속에서 점점 충격적인 비밀에 다가가는 심리 스릴러입니다."},
  {id:19,primaryGenre:"미스터리",title:"셔터 아일랜드",genres:["미스터리","스릴러","드라마"],year:2010,runtime:138,rating:8.4,moods:["tense","thoughtful"],companions:["alone","friends"],popularity:91,hidden:false,description:"외딴 섬의 병원을 조사하던 수사관이 기억과 현실의 경계가 흔들리는 사건에 빠져듭니다."},
  {id:20,primaryGenre:"코미디",title:"인턴",genres:["코미디","드라마"],year:2015,runtime:121,rating:8.1,moods:["funny","relaxing","emotional"],companions:["family","alone"],popularity:88,hidden:false,description:"은퇴 후 인턴으로 새로운 일을 시작한 노인이 젊은 CEO와 우정을 쌓으며 서로의 삶에 변화를 줍니다."},
  {id:21,primaryGenre:"코미디",title:"캐치 미 이프 유 캔",genres:["범죄","코미디","드라마"],year:2002,runtime:141,rating:8.3,moods:["funny","exciting"],companions:["friends","alone"],popularity:89,hidden:false,description:"천재적인 사기꾼과 그를 쫓는 수사관의 긴 추격을 경쾌하고 매력적으로 그린 범죄 드라마입니다."},
  {id:22,primaryGenre:"애니메이션",title:"월-E",genres:["애니메이션","SF","가족"],year:2008,runtime:98,rating:8.8,moods:["relaxing","thoughtful","emotional"],companions:["family","alone"],popularity:93,hidden:false,description:"홀로 지구를 청소하던 로봇이 새로운 친구를 만나 우주로 떠나는 아름답고 의미 있는 모험입니다."},
  {id:23,primaryGenre:"드라마",title:"히든 피겨스",genres:["드라마","역사"],year:2016,runtime:127,rating:8.4,moods:["emotional","thoughtful"],companions:["family","friends"],popularity:84,hidden:true,description:"우주 개발의 중요한 순간을 만든 세 여성의 재능과 도전을 힘 있게 그려낸 실화 기반 드라마입니다."},
  {id:24,primaryGenre:"액션",title:"포드 V 페라리",genres:["액션","드라마","스포츠"],year:2019,runtime:152,rating:8.5,moods:["exciting","emotional"],companions:["friends","family"],popularity:87,hidden:true,description:"완벽한 경주차를 만들기 위해 한계를 넘는 엔지니어와 드라이버의 열정적인 도전을 담았습니다."},
  {id:25,primaryGenre:"로맨스",title:"비긴 어게인",genres:["음악","로맨스","드라마"],year:2013,runtime:104,rating:8.2,moods:["relaxing","emotional"],companions:["couple","friends"],popularity:90,hidden:false,description:"상처받은 두 음악인이 도시 곳곳에서 노래를 만들며 새로운 시작과 관계를 찾아가는 음악 영화입니다."},
  {id:26,primaryGenre:"애니메이션",title:"스파이더맨: 뉴 유니버스",genres:["애니메이션","액션","SF"],year:2018,runtime:117,rating:8.8,moods:["exciting","thoughtful","funny"],companions:["friends","family"],popularity:97,hidden:false,description:"평범한 소년이 여러 차원의 영웅들을 만나 자신만의 방식으로 영웅이 되어가는 독창적인 애니메이션입니다."},
  {id:27,primaryGenre:"코미디",title:"그랜드 부다페스트 호텔",genres:["코미디","모험","드라마"],year:2014,runtime:100,rating:8.1,moods:["funny","relaxing"],companions:["friends","couple"],popularity:80,hidden:true,description:"전설적인 호텔 지배인과 로비 보이가 기묘한 사건을 겪는 과정을 감각적인 화면과 유머로 담았습니다."},
  {id:28,primaryGenre:"SF",title:"듄",genres:["SF","모험","드라마"],year:2021,runtime:155,rating:8.2,moods:["thoughtful","exciting","tense"],companions:["alone","friends"],popularity:96,hidden:false,description:"거대한 사막 행성을 둘러싼 권력과 운명, 생존의 이야기를 웅장한 세계관으로 펼쳐냅니다."},
  {id:29,primaryGenre:"SF",title:"에브리씽 에브리웨어",genres:["SF","코미디","판타지"],year:2022,runtime:139,rating:8.0,moods:["funny","emotional","thoughtful","exciting"],companions:["friends","alone"],popularity:88,hidden:true,description:"평범한 삶에 지친 주인공이 무한한 가능성의 세계를 오가며 가족과 자신의 의미를 다시 바라봅니다."},
  {id:30,primaryGenre:"애니메이션",title:"센과 치히로의 행방불명",genres:["애니메이션","판타지","모험"],year:2001,runtime:125,rating:9.0,moods:["relaxing","thoughtful","emotional","exciting"],companions:["family","alone"],popularity:99,hidden:false,description:"낯선 세계에 들어간 소녀가 용기와 배려를 배우며 가족을 구하기 위해 성장하는 환상적인 모험입니다."},
];

const GENRE_DEFAULTS = {
  "액션": {moods:["exciting","tense"], companions:["friends","alone"]},
  "공포": {moods:["tense","thoughtful"], companions:["friends","couple"]},
  "로맨스": {moods:["emotional","relaxing"], companions:["couple","alone"]},
  "코미디": {moods:["funny","relaxing"], companions:["friends","family"]},
  "드라마": {moods:["emotional","thoughtful"], companions:["alone","family"]},
  "애니메이션": {moods:["relaxing","funny","emotional"], companions:["family","friends"]},
  "SF": {moods:["thoughtful","exciting"], companions:["alone","friends"]},
  "미스터리": {moods:["tense","thoughtful"], companions:["alone","friends"]}
};

const GENRE_DESCRIPTIONS = {
  "액션": "강렬한 전개와 역동적인 장면으로 몰입감을 높이는 액션 영화입니다.",
  "공포": "불안한 분위기와 예측하기 어려운 사건으로 긴장감을 끌어올리는 호러 영화입니다.",
  "로맨스": "인물들의 만남과 선택을 섬세하게 따라가는 감성적인 로맨스 영화입니다.",
  "코미디": "재치 있는 상황과 유쾌한 인물들로 부담 없이 즐길 수 있는 코미디 영화입니다.",
  "드라마": "인물의 감정과 삶의 변화를 깊이 있게 담아낸 드라마 영화입니다.",
  "애니메이션": "상상력 넘치는 세계와 따뜻한 메시지를 함께 즐길 수 있는 애니메이션입니다.",
  "SF": "새로운 세계와 기술, 인간에 대한 질문을 흥미롭게 펼치는 SF 영화입니다.",
  "미스터리": "숨겨진 단서와 반전을 따라가며 사건의 진실을 추리하는 미스터리 영화입니다."
};
