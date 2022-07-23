console.log("working");
let hr1 = document.createElement("hr");
let dashboard = () => {
  let a = document.getElementById("team");
  let b = document.querySelector("#team>p");

  a.style.backgroundColor = "#484848";
  b.style.color = "white";

  let container = document.getElementById("showresult");
  container.innerHTML = null;
  let x = document.getElementById("dashboardicon");
  let y = document.querySelector("#dashboardicon>p");
  x.style.backgroundColor = "white";
  y.style.color = "black";
  let div = document.createElement("div");
  div.setAttribute("class", "dash-heading");
  let h = document.createElement("h1");
  h.innerText = "Dashboard";
  let p = document.createElement("p");
  p.innerText = "Last Update on 22-07-2022,8:35:08 AM";
  let input = document.createElement("div");
  input.setAttribute("class", "input-div");
  let inputbox1 = document.createElement("input");
  let inputbox2 = document.createElement("input");
  let p2 = document.createElement("p");
  p2.innerText = "Lead Prospected Date Range";
  inputbox1.type = "date";

  inputbox1.placeholder = "Start Date";
  inputbox2.type = "date";
  inputbox2.placeholder = "End Date";
  let div3 = document.createElement("div");
  div3.setAttribute("class", "dash-map");
  let h3 = document.createElement("h1");
  h3.innerText = "Leads";
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  div5.setAttribute("class", "flex-div");
  let heading = document.createElement("h3");
  heading.innerText = "Top Location";
  let hr = document.createElement("hr");
  let img = document.createElement("img");
  img.src = "https://i.postimg.cc/TPRC65LM/world.png";
  div5.append(heading, hr, img);
  let div6 = document.createElement("div");
  div6.setAttribute("class", "side-div");
  let heading2 = document.createElement("h4");
  heading2.innerText = "Top Prospectors";
  let searchinput = document.createElement("input");
  searchinput.placeholder = "Search";
  // let spam = document.createElement("span");
  // spam.innerHTML = `<i class="fa-solid fa-magnifying-glass" style="color: gray"></i>`;
  let div7 = document.createElement("div");
  div7.innerHTML = `<h4>Name</h4> <h4>Capture</h4>`;
  div7.setAttribute("class", "text-gap");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checked1");
  let sign = document.createElement("h4");
  let div8 = document.createElement("div");
  div8.append(checkbox, sign);
  div8.setAttribute("class", "div-8");
  sign.innerText = "Unassigned";
  div6.append(heading2, searchinput, hr, div7, div8);
  div4.setAttribute("class", "dash-grid");
  let hr1 = document.createElement("hr");
  let hr2 = document.createElement("hr");
  let hr3 = document.createElement("hr");
  let div9 = document.createElement("div");
  div9.setAttribute("class", "div-9");
  let h9 = document.createElement("h3");
  h9.innerText = "Top Industries";
  div9.append(h9, hr);
  let div10 = document.createElement("div");
  let h10 = document.createElement("h3");
  h10.innerText = "Top Company Sizes";
  div10.append(h10, hr1);
  div10.setAttribute("class", "div-10");

  //   start the next
  let div11 = document.createElement("div");
  div11.setAttribute("class", "div-11");
  let h11 = document.createElement("h3");
  h11.innerText = "Top Seniorities";
  div11.append(h11, hr2);
  let div12 = document.createElement("div");
  let h12 = document.createElement("h3");
  h12.innerText = "Top Titles";
  div12.append(h12, hr3);
  div12.setAttribute("class", "div-12");
  div4.append(div5, div6, div9, div10, div11, div12);

  div3.append(h3, div4);
  input.append(p2, inputbox1, inputbox2);
  div.append(h, p);
  container.append(div, input, div3);
};
// dashboard();

document.getElementById("dashboardicon").addEventListener("click", dashboard);
// dashboard();

let data = [
  {
    id: "Thoughtstorm",
    first_name: "Bibby",
    last_name: "Iskowicz",
    email: "biskowicz0@eepurl.com",
    gender: "Female",
    avtar: "https://robohash.org/consequunturnonquia.png?size=50x50&set=set1",
    linkdin: "Photojournalism",
  },
  {
    id: "Edgepulse",
    first_name: "Oliy",
    last_name: "Quernel",
    email: "oquernel1@bandcamp.com",
    gender: "Female",
    avtar: "https://robohash.org/exfacilisnon.png?size=50x50&set=set1",
    linkdin: "Turkish",
  },
  {
    id: "Zooxo",
    first_name: "Cass",
    last_name: "Byrd",
    email: "cbyrd2@usnews.com",
    gender: "Female",
    avtar: "https://robohash.org/veniamharumeveniet.png?size=50x50&set=set1",
    linkdin: "Novels",
  },
  {
    id: "Eadel",
    first_name: "Jeri",
    last_name: "Adame",
    email: "jadame3@scribd.com",
    gender: "Female",
    avtar: "https://robohash.org/sintofficiadoloribus.png?size=50x50&set=set1",
    linkdin: "PML",
  },
  {
    id: "Mynte",
    first_name: "Claiborne",
    last_name: "Coppard",
    email: "ccoppard4@omniture.com",
    gender: "Male",
    avtar: "https://robohash.org/laborumexin.png?size=50x50&set=set1",
    linkdin: "Mobile TV",
  },
  {
    id: "Chatterbridge",
    first_name: "Correy",
    last_name: "Widdall",
    email: "cwiddall5@ucla.edu",
    gender: "Male",
    avtar: "https://robohash.org/doloresdeseruntdolor.png?size=50x50&set=set1",
    linkdin: "DBWorks",
  },
  {
    id: "Kwimbee",
    first_name: "Tabbie",
    last_name: "Groves",
    email: "tgroves6@globo.com",
    gender: "Male",
    avtar: "https://robohash.org/providentsedullam.png?size=50x50&set=set1",
    linkdin: "HCFA",
  },
  {
    id: "Skivee",
    first_name: "Tracy",
    last_name: "Ekins",
    email: "tekins7@virginia.edu",
    gender: "Male",
    avtar: "https://robohash.org/sedipsamomnis.png?size=50x50&set=set1",
    linkdin: "Continuous Improvement",
  },
  {
    id: "Jayo",
    first_name: "Shalom",
    last_name: "St. Leger",
    email: "sstleger8@delicious.com",
    gender: "Genderfluid",
    avtar: "https://robohash.org/nostrumetautem.png?size=50x50&set=set1",
    linkdin: "LR",
  },
  {
    id: "Eamia",
    first_name: "Paquito",
    last_name: "Kadd",
    email: "pkadd9@wired.com",
    gender: "Male",
    avtar: "https://robohash.org/dolorlaudantiumvitae.png?size=50x50&set=set1",
    linkdin: "CPG Industry",
  },
  {
    id: "Thoughtstorm",
    first_name: "Ollie",
    last_name: "Kavanagh",
    email: "okavanagha@webmd.com",
    gender: "Male",
    avtar: "https://robohash.org/autetnisi.png?size=50x50&set=set1",
    linkdin: "Keratin Treatment",
  },
  {
    id: "Gabtune",
    first_name: "Durand",
    last_name: "Gurrado",
    email: "dgurradob@cdc.gov",
    gender: "Bigender",
    avtar: "https://robohash.org/nonreiciendiset.png?size=50x50&set=set1",
    linkdin: "Gw Basic",
  },
  {
    id: "Trudeo",
    first_name: "Ellery",
    last_name: "Brugger",
    email: "ebruggerc@ucoz.ru",
    gender: "Male",
    avtar: "https://robohash.org/etautoptio.png?size=50x50&set=set1",
    linkdin: "Wovens",
  },
  {
    id: "Katz",
    first_name: "Beltran",
    last_name: "Mettericke",
    email: "bmettericked@jugem.jp",
    gender: "Male",
    avtar: "https://robohash.org/nonnonsit.png?size=50x50&set=set1",
    linkdin: "IBM Rational Rhapsody",
  },
  {
    id: "Roomm",
    first_name: "Rosetta",
    last_name: "Sommerlin",
    email: "rsommerline@com.com",
    gender: "Female",
    avtar: "https://robohash.org/corruptietvoluptatem.png?size=50x50&set=set1",
    linkdin: "Sales Operations",
  },
  {
    id: "Dynabox",
    first_name: "Tammi",
    last_name: "Iwanowicz",
    email: "tiwanowiczf@cbslocal.com",
    gender: "Female",
    avtar: "https://robohash.org/etullamsunt.png?size=50x50&set=set1",
    linkdin: "HF",
  },
  {
    id: "Tagfeed",
    first_name: "Christophe",
    last_name: "Wavell",
    email: "cwavellg@craigslist.org",
    gender: "Male",
    avtar: "https://robohash.org/perferendisestnostrum.png?size=50x50&set=set1",
    linkdin: "IPO",
  },
  {
    id: "Jabberstorm",
    first_name: "Ursuline",
    last_name: "Zouch",
    email: "uzouchh@sourceforge.net",
    gender: "Female",
    avtar: "https://robohash.org/impeditetitaque.png?size=50x50&set=set1",
    linkdin: "Digital IC Design",
  },
  {
    id: "JumpXS",
    first_name: "Klemens",
    last_name: "Pietesch",
    email: "kpieteschi@cafepress.com",
    gender: "Male",
    avtar: "https://robohash.org/quasidoloribussed.png?size=50x50&set=set1",
    linkdin: "Shrinkage",
  },
  {
    id: "Bubbletube",
    first_name: "Kendre",
    last_name: "Flaunders",
    email: "kflaundersj@acquirethisname.com",
    gender: "Female",
    avtar: "https://robohash.org/doloremetquo.png?size=50x50&set=set1",
    linkdin: "Litigation",
  },
  {
    id: "Oyondu",
    first_name: "Janine",
    last_name: "Kennington",
    email: "jkenningtonk@scribd.com",
    gender: "Female",
    avtar:
      "https://robohash.org/totamvoluptatibusomnis.png?size=50x50&set=set1",
    linkdin: "Youth Outreach",
  },
  {
    id: "Mynte",
    first_name: "Wrennie",
    last_name: "Pibworth",
    email: "wpibworthl@hugedomains.com",
    gender: "Female",
    avtar: "https://robohash.org/doloremarchitectoesse.png?size=50x50&set=set1",
    linkdin: "DS4000",
  },
  {
    id: "Skynoodle",
    first_name: "Christy",
    last_name: "Scrivner",
    email: "cscrivnerm@nature.com",
    gender: "Male",
    avtar: "https://robohash.org/sitsuscipitofficiis.png?size=50x50&set=set1",
    linkdin: "IT Outsourcing",
  },
  {
    id: "Voonix",
    first_name: "Darn",
    last_name: "Kohnert",
    email: "dkohnertn@mayoclinic.com",
    gender: "Male",
    avtar: "https://robohash.org/nonminimavoluptates.png?size=50x50&set=set1",
    linkdin: "Cognitive Psychology",
  },
  {
    id: "Twitterworks",
    first_name: "Leonora",
    last_name: "Cockren",
    email: "lcockreno@oakley.com",
    gender: "Female",
    avtar: "https://robohash.org/etrepellenduscommodi.png?size=50x50&set=set1",
    linkdin: "QSA",
  },
  {
    id: "Buzzdog",
    first_name: "Conant",
    last_name: "Le Marchant",
    email: "clemarchantp@forbes.com",
    gender: "Male",
    avtar: "https://robohash.org/quametmollitia.png?size=50x50&set=set1",
    linkdin: "OMNI",
  },
  {
    id: "Quatz",
    first_name: "Abie",
    last_name: "Fosten",
    email: "afostenq@china.com.cn",
    gender: "Male",
    avtar: "https://robohash.org/consecteturtemporased.png?size=50x50&set=set1",
    linkdin: "SDS-PAGE",
  },
  {
    id: "Kaymbo",
    first_name: "Gabe",
    last_name: "Clayson",
    email: "gclaysonr@last.fm",
    gender: "Male",
    avtar:
      "https://robohash.org/necessitatibusundealiquam.png?size=50x50&set=set1",
    linkdin: "RPR",
  },
  {
    id: "Quatz",
    first_name: "Paige",
    last_name: "Phettis",
    email: "pphettiss@webnode.com",
    gender: "Male",
    avtar: "https://robohash.org/temporarepudiandaeea.png?size=50x50&set=set1",
    linkdin: "Utilization Management",
  },
  {
    id: "Thoughtsphere",
    first_name: "Kania",
    last_name: "Gimert",
    email: "kgimertt@weather.com",
    gender: "Female",
    avtar: "https://robohash.org/etsequinihil.png?size=50x50&set=set1",
    linkdin: "MS VC++",
  },
  {
    id: "Jatri",
    first_name: "Rowland",
    last_name: "Patshull",
    email: "rpatshullu@friendfeed.com",
    gender: "Male",
    avtar:
      "https://robohash.org/delenitiperspiciatisquis.png?size=50x50&set=set1",
    linkdin: "EBMS",
  },
  {
    id: "Buzzdog",
    first_name: "Melantha",
    last_name: "Mewes",
    email: "mmewesv@cnet.com",
    gender: "Female",
    avtar:
      "https://robohash.org/quirepellendusconsequatur.png?size=50x50&set=set1",
    linkdin: "Kinematics",
  },
  {
    id: "Gigabox",
    first_name: "Sapphira",
    last_name: "Hedley",
    email: "shedleyw@goo.ne.jp",
    gender: "Female",
    avtar: "https://robohash.org/eumessesit.png?size=50x50&set=set1",
    linkdin: "Non-profit Board Development",
  },
  {
    id: "Skyba",
    first_name: "Anstice",
    last_name: "McRamsey",
    email: "amcramseyx@mapy.cz",
    gender: "Female",
    avtar: "https://robohash.org/nequemagnised.png?size=50x50&set=set1",
    linkdin: "Healthcare",
  },
  {
    id: "Dynava",
    first_name: "Polly",
    last_name: "Helleckas",
    email: "phelleckasy@addtoany.com",
    gender: "Female",
    avtar: "https://robohash.org/namaliquamdeserunt.png?size=50x50&set=set1",
    linkdin: "Apollo GDS",
  },
  {
    id: "Yakitri",
    first_name: "Kimball",
    last_name: "Glancy",
    email: "kglancyz@bloglines.com",
    gender: "Male",
    avtar: "https://robohash.org/solutaitaquemaxime.png?size=50x50&set=set1",
    linkdin: "Rhinoplasty",
  },
  {
    id: "Topicblab",
    first_name: "Megen",
    last_name: "Cuphus",
    email: "mcuphus10@zimbio.com",
    gender: "Female",
    avtar: "https://robohash.org/remerrorest.png?size=50x50&set=set1",
    linkdin: "Banking",
  },
  {
    id: "Twinder",
    first_name: "Philippa",
    last_name: "Martyns",
    email: "pmartyns11@skype.com",
    gender: "Female",
    avtar: "https://robohash.org/autfaciliseligendi.png?size=50x50&set=set1",
    linkdin: "Technical Illustration",
  },
  {
    id: "Pixonyx",
    first_name: "Lola",
    last_name: "Brasier",
    email: "lbrasier12@squidoo.com",
    gender: "Female",
    avtar: "https://robohash.org/aspernaturerroret.png?size=50x50&set=set1",
    linkdin: "Aeronautics",
  },
  {
    id: "Skiba",
    first_name: "My",
    last_name: "Ough",
    email: "mough13@godaddy.com",
    gender: "Male",
    avtar: "https://robohash.org/sintrepudiandaeest.png?size=50x50&set=set1",
    linkdin: "xUnit",
  },
  {
    id: "Trilith",
    first_name: "Cindy",
    last_name: "Bartolomieu",
    email: "cbartolomieu14@comsenz.com",
    gender: "Female",
    avtar: "https://robohash.org/eumlaudantiumquis.png?size=50x50&set=set1",
    linkdin: "SSO",
  },
  {
    id: "Devpulse",
    first_name: "Byram",
    last_name: "Sellors",
    email: "bsellors15@creativecommons.org",
    gender: "Male",
    avtar: "https://robohash.org/nihildebitisdolorem.png?size=50x50&set=set1",
    linkdin: "AOD",
  },
  {
    id: "Skaboo",
    first_name: "Wallie",
    last_name: "Rawle",
    email: "wrawle16@dropbox.com",
    gender: "Male",
    avtar: "https://robohash.org/enimutaliquam.png?size=50x50&set=set1",
    linkdin: "FBO",
  },
  {
    id: "Edgeblab",
    first_name: "Lin",
    last_name: "Desborough",
    email: "ldesborough17@webs.com",
    gender: "Male",
    avtar: "https://robohash.org/quoquipraesentium.png?size=50x50&set=set1",
    linkdin: "Jigsaw",
  },
  {
    id: "Quaxo",
    first_name: "Ailene",
    last_name: "Murrells",
    email: "amurrells18@scribd.com",
    gender: "Female",
    avtar: "https://robohash.org/harumquodenim.png?size=50x50&set=set1",
    linkdin: "RTL Verification",
  },
  {
    id: "Centidel",
    first_name: "Selia",
    last_name: "Debrett",
    email: "sdebrett19@usa.gov",
    gender: "Female",
    avtar: "https://robohash.org/nullaenimvoluptatem.png?size=50x50&set=set1",
    linkdin: "OnQ",
  },
  {
    id: "Yodo",
    first_name: "Adrea",
    last_name: "McGookin",
    email: "amcgookin1a@mail.ru",
    gender: "Female",
    avtar:
      "https://robohash.org/officiissimiliquenulla.png?size=50x50&set=set1",
    linkdin: "DMR",
  },
  {
    id: "Photojam",
    first_name: "Everett",
    last_name: "Dorber",
    email: "edorber1b@timesonline.co.uk",
    gender: "Male",
    avtar:
      "https://robohash.org/veritatisaperiamrepudiandae.png?size=50x50&set=set1",
    linkdin: "Rule Of Law",
  },
  {
    id: "Ailane",
    first_name: "Inesita",
    last_name: "Renton",
    email: "irenton1c@kickstarter.com",
    gender: "Female",
    avtar: "https://robohash.org/aspernaturquiaab.png?size=50x50&set=set1",
    linkdin: "Title IV",
  },
  {
    id: "Browsecat",
    first_name: "Josephina",
    last_name: "Congreve",
    email: "jcongreve1d@statcounter.com",
    gender: "Female",
    avtar: "https://robohash.org/illumimpeditdoloribus.png?size=50x50&set=set1",
    linkdin: "Financial Reporting",
  },
];

let tablebody = () => {
  let y = document.getElementById("team");
  let z = document.querySelector("#team>p");

  y.style.backgroundColor = "white";
  z.style.color = "black";
  let dashboard = document.getElementById("dashboardicon");
  let dashboarp = document.querySelector("#dashboardicon>p");
  dashboard.style.backgroundColor = "#484848";
  dashboarp.style.color = "white";
  let x = document.getElementById("showresult");
  x.innerHTML = `       <div id="headingresult">
 <h3>TEAM MEMBERS</h3>
 <h3>SUPPRESSION LIST</h3>
 <h3>REPORTS</h3>
</div>
<button id="invite"> + Invite</button>
<div id="box">
 <h3>All Team Members </h3><span id="arrow"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1"
         x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve">
         <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
             stroke-miterlimit="10" stroke-width="2" d="M20.5 11.5l-6 6-6-6" />
     </svg></span>
</div>
<table>
 <thead>
     <tr>
         <td><input type="checkbox"> Name<i class="fa-solid fa-magnifying-glass"
                 style="color: gray"></i></td>
         <td><input type="checkbox"> Email<i class="fa-solid fa-magnifying-glass"
                 style="color: gray"></i></td>
         <td id="sorting">Group</td>
         <td>Maniging Group</td>
         <td>Intergration</td>
         <td>Stndard credit</td>
         <td>priminu credit</td>
     </tr>
 </thead>
 <tbody>
     
 </tbody>
</table>`;
  tbodyappend(data);
};

document.getElementById("team").addEventListener("click", tablebody);
// tablebody();

let tbodyappend = (data) => {
  data.forEach((elem) => {
    let { first_name, last_name, email, id, gender, avtar, linkdin } = elem;
    // id: "Thoughtstorm",
    // first_name: "Bibby",
    // last_name: "Iskowicz",
    // email: "biskowicz0@eepurl.com",
    // gender: "Female",
    // avtar: "https://robohash.org/consequunturnonquia.png?size=50x50&set=set1",
    // linkdin: "Photojournalism",
    //
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = `<input type="checkbox"> ${first_name} ${last_name}</td>`;
    let td2 = document.createElement("td");
    td2.innerText = `${email}`;
    let td3 = document.createElement("td");
    td3.innerText = id;
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    td6.innerHTML = `<progress id="file" value="32" max="100"> 32% </progress>`;
    let td7 = document.createElement("td");
    td7.innerHTML = `<progress id="file" value="40" max="100"> 32% </progress>`;
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
};
