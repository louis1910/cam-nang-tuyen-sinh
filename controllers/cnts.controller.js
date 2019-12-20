const admin = require('firebase-admin');

let serviceAccount = require('../cam-nang-tuyen-sinh.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: "gs://cam-nang-tuyen-sinh.appspot.com/"
});


let db = admin.firestore();



module.exports.cnts = async(req, res)=>{
	let type = [];

	let onthi = [];

	await db.collection('nganh').get()
	.then((data) => {
		data.forEach(async(doc)=>{
			let tennganh = doc.data().tennganh;
			let duongdan = doc.data().duongdan;
			let list = new Object();

			list.tennganh = tennganh;
			list.duongdan = duongdan;

			type.push(list);
		})
	})

	await db.collection('onthi').get()
	.then((data) => {
		data.forEach(async(doc)=>{
			let noidung = doc.data().NOIDUNG;
			let token = doc.data().TOKEN;

			let list = new Object();

			list.noidung = noidung;
			list.token = token;

			onthi.push(list);

		})
	})

	res.render('index',{
		type: type,
		onthi: onthi
	});
};

module.exports.tvctcntt = async(req, res) =>{
	let tuvan = [];

	let type = [];

	await db.collection('nganh').get()
	.then((data) => {
		data.forEach(async(doc)=>{
			let tennganh = doc.data().tennganh;
			let duongdan = doc.data().duongdan;
			let list = new Object();

			list.tennganh = tennganh;
			list.duongdan = duongdan;

			type.push(list);
		})
	})

	await db.collection('tuvan').get()
	.then((data) => {
		data.forEach(async(doc)=>{

			let noidung = doc.data().NOIDUNG;
			let token = doc.data().TOKEN;


			let list = new Object();

			list.noidung = noidung;
			list.token = token;

			tuvan.push(list);
		})
	})

	res.render('tuvan',{
		type: type,
		tuvan: tuvan
	})
}


module.exports.ttts = async(req, res) =>{
	let thongtin = [];

	let type = [];

	await db.collection('nganh').get()
	.then((data) => {
		data.forEach(async(doc)=>{
			let tennganh = doc.data().tennganh;
			let duongdan = doc.data().duongdan;
			let list = new Object();

			list.tennganh = tennganh;
			list.duongdan = duongdan;

			type.push(list);
		})
	})

	await db.collection('thongtintuyensinh').get()
	.then((data) => {
		data.forEach(async(doc)=>{

			let noidung = doc.data().NOIDUNG;
			let token = doc.data().TOKEN;


			let list = new Object();

			list.noidung = noidung;
			list.token = token;

			thongtin.push(list);
		})
	})

	res.render('thongtin',{
		type: type,
		thongtin: thongtin
	})
}

