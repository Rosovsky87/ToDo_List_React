
function newId(length) {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

	if (!length) {
		length = Math.floor(Math.random() * chars.length);
	}

	let str = '';
	for (let i = 0; i < length; i++) {
		str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}


let db = [
	{ label: 'Заехать в офис за документами', detail: 'Забрать документы о разработке системы вентиляции на третьем этаже', showThisDetail: false, done: false, important: false, id: 3 },
	{ label: 'Встреча с Иваном Ивановичем', detail: 'Встреча в 15:00 у него в офисе на Мойке', showThisDetail: false, done: false, important: false, id: 4 },
	{ label: 'Купить молоко', detail: '', showThisDetail: false, done: false, important: false, id: 5 },
	{ label: 'Купить дочери костюм на утренник', detail: 'Нужен именно костюм Эльзы из мультфильма "Холодное Сердце"', showThisDetail: false, done: false, important: false, id: 6 },
	{ label: 'Позвонить маме', detail: 'Узнать приедет ли к нам на Новый Год', showThisDetail: false, done: false, important: false, id: 7 },
];

let filtredData = db.filter(el => el.label);

filtredData.forEach((el) => {
	let id = newId(33);
	el.id = id;
})

db = filtredData;

export { db, newId } 
