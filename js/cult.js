const toggleModal = () => {
	document.querySelector('.modal').classList.toggle('--hidden');
};
var classes=[{
		ClassName:"Vinyasa Yoga",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Anil",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/4879aa11-7748-487d-8689-ab9fd1244508"
	},{
		ClassName:"HIIT - Full Body",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Rishabh",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/1b36b81d-30d2-4702-b1db-95c327535a81"
	},{
		ClassName:"Boxing - Core & Conditioning",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Mujtaba Kamal",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/5e5818a6-05dd-40ff-9559-e99b0073a99e"
	},{
		ClassName:"Dance Fitness",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Naveen",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/a6d885c4-0331-4877-a08d-6a53202c57f5"
	},{
		ClassName:"HRX Workout : Legs & Core",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Rahul Huidrom",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/44d87f27-f215-4d37-bbc9-da897d56c892"
	},{
		ClassName:"Relax Yoga",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Anvita Dixit",
		ClassComplexity:"BEGINNER",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/18a22e13-f424-4c93-a5ff-286c4173328a"
	},{
		ClassName:"Hatha Yoga",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Carolyn Simmon",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/6540b758-38d2-4eed-8072-15f7e977b4e4"
	},{
		ClassName:"Dance Fitness",
		ClassTime:"11:30AM 12:30PM 01:30PM MORE".split(' '),
		CoachName:"Tom",
		ClassComplexity:"BEGINNER",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/eb8fa879-b0af-454a-a9dd-e34ec42328da"
	},{
		ClassName:"30-Mins Cardio Workout",
		ClassTime:"11:30AM 12:30PM 01:30PM MORE".split(' '),
		CoachName:"Niran Ponnappa",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/1d4137f6-e9bc-481a-a8c2-51cb219c8fe0"
	},{
		ClassName:"Masterclass:S&C with Sonam Bajwa",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Sonam Bajwa",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/de98b62a-2a0f-4b7d-99ed-00e4b884f6cc"
	},{
		ClassName:"Masterclass:Boxing with Mary Kom",
		ClassTime:"11:30AM 12:30PM 01:30PM MORE".split(' '),
		CoachName:"Mary Kom",
		ClassComplexity:"MODERATE",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/96bf7bef-54bd-412d-a74e-f2f80598ea04"
	},{
		ClassName:"Strength & Conditioning:Lower Body Burner",
		ClassTime:"11:00AM 12:00PM 01:00PM MORE".split(' '),
		CoachName:"Niran Ponnappa",
		ClassComplexity:"ADVANCED",
		ClassImage:"https://cdn-images.cure.fit/www-curefit-com/image/upload/w_500,ar_1.58,fl_progressive,f_auto,q_auto:eco/dpr_0.75/image/diy/b2817271-69fa-4b90-991a-3825c8808ded"
	}
];
store1= () =>{
	var classList = JSON.parse(localStorage.getItem("classList") || JSON.stringify(classes));
	for(var i=0;i<classList.length;i++){
		if(classList[i].ClassTime.length>0)
			var str="<a href=\"#\" class=\"btn\"><span class=\"dot\"></span>&nbsp;"+classList[i].ClassTime[0]+"</a>";
		for(var j=1;j<classList[i].ClassTime.length ;j++)
			str=str+"<a href=\"#\" class=\"btn\">"+classList[i].ClassTime[j]+"</a>";
		if(i==0)
			$("div.carousel-inner").append("<div class=\"carousel-item active\"><div class=\"container\"><div class=\"row\"><div class=\"col-4\"><div class=\"card\"><div class=\"card-block\" style=\"padding:5px;\"><img src="+classList[i].ClassImage+" width=\"100%\" height=\"100%\" class=\"img-fluid\"><div class=\"card-title\"><h4>"+classList[i].ClassName+"</h4></div><div class=\"card-text\">By "+classList[i].CoachName+" | "+classList[i].ClassComplexity+"</div>"+str+"</div></div></div></div></div></div>");
		else if(i%3==0)
			$("div.carousel-inner").append("<div class=\"carousel-item\"><div class=\"container\"><div class=\"row\"><div class=\"col-4\"><div class=\"card\"><div class=\"card-block\" style=\"padding:5px;\"><img src="+classList[i].ClassImage+" width=\"100%\" height=\"100%\" class=\"img-fluid\"><div class=\"card-title\"><h4>"+classList[i].ClassName+"</h4></div><div class=\"card-text\">By "+classList[i].CoachName+" | "+classList[i].ClassComplexity+"</div>"+str+"</div></div></div></div></div></div>");
		else
			$("div.carousel-inner>div.carousel-item>div.container>div.row").last().append("<div class=\"col-4\"><div class=\"card\"><div class=\"card-block\" style=\"padding:5px;\"><img src="+classList[i].ClassImage+" width=\"100%\" height=\"100%\" class=\"img-fluid\"><div class=\"card-title\"><h4>"+classList[i].ClassName+"</h4></div><div class=\"card-text\">By "+classList[i].CoachName+" | "+classList[i].ClassComplexity+"</div>"+str+"</div></div></div>");		
	}
};
store = () =>{
	let name=document.getElementById('ClassName').value;
	let time=document.getElementById('ClassTime').value;
	let coach=document.getElementById('CoachName').value;
	let comp=document.getElementById('ClassComplexity').value;
	let image=document.getElementById('ClassImage').value;
	let obj={
		ClassName:name,
		ClassTime:time.split(' '),
		CoachName:coach,
		ClassComplexity:comp,
		ClassImage:image
	};
	var classList = JSON.parse(localStorage.getItem("classList") || JSON.stringify(classes));
	classList.push(obj);
	localStorage.setItem("classList", JSON.stringify(classList));
}