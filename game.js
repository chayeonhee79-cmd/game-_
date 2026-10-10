const places=[
['복지관 출발','start','🏡','옥포에 있는 종합사회복지관에서 설레는 거제 여행을 시작해요.'],
['거제 포로수용소 유적공원','land','🕊️','한국전쟁의 역사를 돌아보고 평화의 소중함을 생각하는 공간이에요.','이곳에서 생각해 볼 가치는 무엇일까요?',['평화','경쟁','속도'],0],
['계룡산','land','⛰️','거제의 산과 바다 풍경을 만날 수 있는 산이에요.','산을 걸을 때 지켜야 할 약속은?',['쓰레기 버리기','정해진 길 걷기','식물 꺾기'],1],
['행복카드','happy','💌'],['매미성','land','🏰','바다와 어우러진 돌 성벽 풍경이 인상적인 명소예요.','매미성 풍경에서 볼 수 있는 것은?',['사막','빙하','돌 성벽'],2],
['맹종죽 테마파크','land','🎋','맹종죽 대나무 숲을 걸으며 초록빛 쉼을 만나요.','맹종죽은 어떤 식물일까요?',['대나무','선인장','해초'],0],
['거가대교','land','🌉','거제와 부산을 연결하는 교통 시설로 바다를 가로지르는 풍경을 만나요.','거가대교가 연결하는 곳은?',['거제와 제주','거제와 부산','서울과 인천'],1],['나눔카드','share','🤝'],
['지심도','land','🌺','동백나무와 바다 풍경을 즐길 수 있는 섬이에요.','지심도와 어울리는 꽃은?',['튤립','해바라기','동백꽃'],2],
['장승포항','land','⚓','어선과 바닷마을의 일상이 어우러지는 항구예요.','항구에서 안전하게 여행하려면?',['안전 난간 지키기','물가에서 뛰기','금지 구역 들어가기'],0],
['구조라해수욕장','land','🏖️','모래사장과 푸른 바다를 만날 수 있는 해변이에요.','바다에 들어가기 전에는?',['혼자 멀리 가기','안전 수칙 확인하기','준비 없이 뛰기'],1],
['외도 보타니아','land','🌴','섬 위에 조성된 정원에서 다양한 식물과 바다를 감상해요.','정원을 둘러볼 때 좋은 행동은?',['꽃 꺾기','나무에 이름 새기기','눈으로 감상하기'],2],['휴식','rest','☕'],
['거제 해금강','land','🪨','바다 위 기암절벽과 바위섬 풍경이 인상적인 명소예요.','해금강 풍경의 특징은?',['바다와 바위','사막과 모래언덕','눈 덮인 빙하'],0],
['바람의 언덕','land','🌬️','풍차와 탁 트인 바다 풍경을 만나는 언덕이에요.','이곳 풍경을 대표하는 것은?',['고층 빌딩','풍차','스키장'],1],
['신선대','land','🌅','해안 바위와 바다의 풍경을 감상할 수 있어요.','바위 전망에서 필요한 행동은?',['절벽 가까이 뛰기','난간 넘기','안전 거리 유지'],2],['행복카드','happy','💌'],
['학동 흑진주몽돌해변','land','⚫','둥근 몽돌 사이로 파도가 지나며 특별한 소리를 들려줘요.','이 해변을 이루는 것은?',['몽돌','눈','낙엽'],0],
['거제 파노라마 케이블카','land','🚡','높은 곳에서 거제의 산과 바다를 조망하는 여행을 즐겨요.','케이블카에서는 어떻게 할까요?',['문에 기대기','탑승 안전 수칙 지키기','밖으로 물건 던지기'],1],
['거제식물원','land','🌿','돔 안에서 다양한 식물과 초록빛 풍경을 만나요.','식물원에서 좋은 관람 방법은?',['식물 가져가기','잎 뜯기','식물 이름 살펴보기'],2],
['공곶이','land','🌼','해안 풍경과 정원의 정취를 느낄 수 있는 곳이에요.','함께 여행하는 친구에게 해 줄 말은?',['같이 천천히 걷자','빨리 안 오면 두고 갈게','꽃을 가져가자'],0],
['거제시청 주변','land','🏙️','거제의 도심 풍경과 일상을 만나며 여행을 마무리해요.','동네를 더 행복하게 만드는 행동은?',['길에 쓰레기 버리기','이웃에게 인사하기','큰 소리로 방해하기'],1],['나눔카드','share','🤝'],['복지관 도착','finish','🏡','옥포 종합사회복지관에 돌아왔어요. 함께한 여행을 추억해요!']];
export const tiles=places.map(([name,type,icon,description='',question='',answers=[],correct=0],id)=>({id,name,type,icon,description,question,answers,correct}));
export const colors=['#ed9567','#479dbd','#b490d2','#66a986'];
export function newGame(names,uids=[]){return {version:1,status:'playing',turn:0,revision:0,dice:[1],pending:null,owners:{},log:[],results:[],players:names.map((name,id)=>({id,name,uid:uids[id]||'',position:0,points:0,visited:[],owned:[],quizzes:[],finished:false}))};}
export function applyAction(original,action,random=Math.random){const s=structuredClone(original);if(s.status!=='playing')throw Error('아직 시작하지 않았거나 종료된 여행입니다.');const p=s.players[s.turn];if(action.actor!==undefined&&p.uid!==action.actor)throw Error('내 차례를 기다려 주세요.');
if(action.type==='roll'){if(s.pending)throw Error('현재 방문을 먼저 마쳐 주세요.');s.dice=[1+Math.floor(random()*6)];p.position=Math.min(23,p.position+s.dice[0]);const tile=tiles[p.position];if(tile.type==='finish'){p.finished=true;p.points+=200;s.log.push(`${p.name}: 복지관 도착! +200`);advance(s);}else if(tile.type==='land'){if(!p.visited.includes(tile.id))p.visited.push(tile.id);p.points+=80;s.pending={tile:tile.id,kind:'land',answered:false,message:'방문 행복 +80점'};}else{const bonus=tile.type==='happy'?100:tile.type==='share'?60:40;p.points+=bonus;if(tile.type==='share')s.players.filter(x=>x.id!==p.id&&!x.finished).forEach(x=>x.points+=30);s.pending={tile:tile.id,kind:tile.type,answered:true,message:tile.type==='share'?'함께 나눠요! 나는 +60점, 여행 중인 친구들은 +30점':tile.type==='rest'?'잠깐 쉬어가요. 행복 +40점':'행복한 순간을 발견했어요! +100점'};}}
else if(action.type==='answer'){if(!s.pending||s.pending.kind!=='land'||s.pending.answered)throw Error('퀴즈를 진행할 수 없습니다.');const t=tiles[s.pending.tile];if(!Number.isInteger(action.answer)||!t.answers[action.answer])throw Error('답을 선택해 주세요.');const correct=action.answer===t.correct;p.quizzes.push({tile:t.id,correct});if(correct)p.points+=50;s.pending.answered=true;s.pending.message=correct?'정답이에요! 행복 +50점':`괜찮아요! 정답은 ‘${t.answers[t.correct]}’예요.`;}
else if(action.type==='claim'||action.type==='develop'){if(!s.pending||s.pending.kind!=='land'||!s.pending.answered)throw Error('퀴즈를 먼저 풀어 주세요.');const id=s.pending.tile;const owner=s.owners[id];if(action.type==='claim'){if(owner||p.points<60)throw Error('획득할 수 없습니다.');p.points-=60;p.owned.push(id);s.owners[id]={player:p.id,level:1};}else{if(!owner||owner.player!==p.id||owner.level>=3||p.points<40)throw Error('발전시킬 수 없습니다.');p.points-=40;owner.level++;}s.pending.message='나만의 여행 명소가 되었어요!';}
else if(action.type==='end'){if(!s.pending||!s.pending.answered)throw Error('퀴즈를 먼저 완료해 주세요.');s.pending=null;advance(s);}else throw Error('알 수 없는 동작입니다.');s.revision++;return s;}
function advance(s){if(s.players.every(p=>p.finished)){s.status='finished';s.results=s.players.map(p=>({id:p.id,name:p.name,points:p.points,visited:[...p.visited]})).sort((a,b)=>b.points-a.points);return;}do{s.turn=(s.turn+1)%s.players.length;}while(s.players[s.turn].finished);}
