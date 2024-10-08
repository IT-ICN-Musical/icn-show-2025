"use client";
import Image from "next/image";
import { useState } from "react";
import "../../globals.css"

const committees = [
  {
    type: "artprod",
    name: "TOPS & MC",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["Masihkah kau mengingat di saat kita masih 17?", "Waktu di mana tanggal-tanggal merah terasa sungguh meriah"],
  },
  {
    type: "artprod",
    name: "Actor/Actress",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/C751A_depot.jpg/330px-C751A_depot.jpg",
    rows: ["Masihkah kauingat cobaan terberat kita, Matematika?", "Masihkah engkau ingat lagu di radio yang merdu mengudara?"],
  },
  {
    type: "artprod",
    name: "Musician",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/2_C830_in_KCD.JPG",
    rows: ["Kita masih sebebas itu", "Rasa takut yang tak pernah mengganggu"],
  },
  {
    type: "artprod",
    name: "Dancer",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bombardier_Movia_C951_mockup_020821.jpg/450px-Bombardier_Movia_C951_mockup_020821.jpg",
    rows: ["Batas naluri bahaya", "Dulu tingginya lebihi logika"],
  },
  {
    type: "artprod",
    name: "Makeup & Wardrobe",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CT251_train_interior_160521.jpg/450px-CT251_train_interior_160521.jpg",
    rows: ["Putaran Bumi dan waktu yang terus berjalan menempa kita", "Walau kini kita terpisah, namun, jiwaku tetap di sana (hey)"],
  },
  {
    type: "artprod",
    name: "Sound Effect Designer",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Percobaan_205-10_dengan_Livery_KAI_Commuter_terbaru_Tahun_2020.jpg/450px-Percobaan_205-10_dengan_Livery_KAI_Commuter_terbaru_Tahun_2020.jpg",
    rows: ["oh, di masa", "Rasa takut yang tak pernah mengganggu"],
  },
  {
    type: "artprod",
    name: "Sets, Property & Equipment",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/205-series_set_148%2C_%28ex_Musashino_Line_set_M64%29%2C_Pasar_Senen%2C_Oct_2019.jpg/480px-205-series_set_148%2C_%28ex_Musashino_Line_set_M64%29%2C_Pasar_Senen%2C_Oct_2019.jpg",
    rows: ["Di masa naluri bahaya", "Dulu tingginya lebihi logika"],
  },
  {
    type: "artprod",
    name: "Assistant State Manager",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/KRL6000Kebayoran.jpg/1920px-KRL6000Kebayoran.jpg",
    rows: ["Muda jiwa, selamanya muda", "Kisah kita abadi selamanya"],
  },
  {
    type: "extaff",
    name: "TOPS & MC",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jakarta_MRT_TS11_leaving_Haji_Nawi_Station.jpg/1920px-Jakarta_MRT_TS11_leaving_Haji_Nawi_Station.jpg",
    rows: ["kita masih sebebas itu", "(Rasa takut yang tak pernah mengganggu)"],
  },
  {
    type: "extaff",
    name: "Corporate Liaison",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/LRT_Jakarta_-_Hyundai_Rotem_LRV_in_Boulevard_Utara_Station.jpg/1920px-LRT_Jakarta_-_Hyundai_Rotem_LRV_in_Boulevard_Utara_Station.jpg",
    rows: ["(Batas naluri bahaya, oh-oh)", "(Dulu tingginya lebihi logika)"],
  },
  {
    type: "extaff",
    name: "Marketing & Ticketing",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/LRT_Jabodebek_Bekasi_Line.jpg/1920px-LRT_Jabodebek_Bekasi_Line.jpg",
    rows: ["Sederas apa pun arus di hidupmu", "Genggam terus kenangan tentang kita"],
  },
  {
    type: "extaff",
    name: "Publicity, Publication & IT (PPIT)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Railink_EA203_passing_Sudirman_Station.jpg/1920px-Railink_EA203_passing_Sudirman_Station.jpg",
    rows: ["Seberapa pun dewasa mengujimu", "Takkan lebih dari yang engkau bisa (Dan kisah kita abadi untuk s'lama-lamanya)"],
  },
];

export default function Committees() {
  const [selectedType, setSelectedType] = useState("artprod");
  const [selectedName, setSelectedName] = useState("TOPS & MC");
  const [filteredCommittees, setFilteredCommittees] = useState(committees.filter(committee => committee.type === "artprod" && committee.name === "TOPS & MC"));

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    const defaultName = type === "artprod" ? "TOPS & MC" : "TOPS & MC";
    setSelectedName(defaultName);
    setFilteredCommittees(committees.filter(committee => committee.type === type && committee.name === defaultName));
  };
  const handleNameSelection = (name) => {
    setSelectedName(name);
    setFilteredCommittees(committees.filter(committee => committee.type === selectedType && committee.name === name));
  };

  const buttonStyle = (isActive) => ({
    backgroundColor: isActive ? '#7e4e70' : 'transparent',
    color: isActive ? 'white' : '#7e4e70',
  });

  const buttonStyle2 = (isActive) => ({
    backgroundColor: isActive ? '#ffffff' : '#a3aaa8',
    color: isActive ? '#7e4e70' : '#000000',
    border: isActive ? '3px solid rgba(126, 78, 128, 1)' :  '3px solid rgba(163, 170, 168, 1)'
  });

  return (
    <main>
      <main className="font-safira-march">Committees<br></br></main>
      <div className="--font-mont">
      <div id="tab">
        <button id="tablinks2" onClick={() => handleTypeSelection("artprod")} style={buttonStyle2(selectedType === "artprod")}>Arts & Productions</button>
        <button id="tablinks2" onClick={() => handleTypeSelection("extaff")} style={buttonStyle2(selectedType === "extaff")}>External Affairs</button>
      </div>
      <div>
        {selectedType === "artprod" && (<div id="tab">
          <button id="tablinks" onClick={() => handleNameSelection("TOPS & MC")} style={buttonStyle(selectedName === "TOPS & MC")}>TOPS & MC</button>
          <button id="tablinks" onClick={() => handleNameSelection("Actor/Actress")} style={buttonStyle(selectedName === "Actor/Actress")}>Actor/Actress</button>
          <button id="tablinks" onClick={() => handleNameSelection("Musician")} style={buttonStyle(selectedName === "Musician")}>Musician</button>
          <button id="tablinks" onClick={() => handleNameSelection("Dancer")} style={buttonStyle(selectedName === "Dancer")}>Dancer</button>
          <button id="tablinks" onClick={() => handleNameSelection("Makeup & Wardrobe")} style={buttonStyle(selectedName === "Makeup & Wardrobe")}>Makeup & Wardrobe</button>
          <button id="tablinks" onClick={() => handleNameSelection("Sound Effect Designer")} style={buttonStyle(selectedName === "Sound Effect Designer")}>Sound Effect Designer</button>
          <button id="tablinks" onClick={() => handleNameSelection("Sets, Property & Equipment")} style={buttonStyle(selectedName === "Sets, Property & Equipment")}>Sets, Property & Equipment</button>
          <button id="tablinks" onClick={() => handleNameSelection("Assistant State Manager")} style={buttonStyle(selectedName === "Assistant State Manager")}>Assistant State Manager</button>
          </div>
        )
        }
        {selectedType === "extaff" && (<div id="tab">
          <button id="tablinks" onClick={() => handleNameSelection("TOPS & MC")} style={buttonStyle(selectedName === "TOPS & MC")}>TOPS & MC</button>
          <button id="tablinks" onClick={() => handleNameSelection("Corporate Liaison")} style={buttonStyle(selectedName === "Corporate Liaison")}>Corporate Liaison</button>
          <button id="tablinks" onClick={() => handleNameSelection("Marketing & Ticketing")} style={buttonStyle(selectedName === "Marketing & Ticketing")}>Marketing & Ticketing</button>
          <button id="tablinks" onClick={() => handleNameSelection("Publicity, Publication & IT (PPIT)")} style={buttonStyle(selectedName === "Publicity, Publication & IT (PPIT)")}>Publicity, Publication & IT</button>
          </div>
        )
        }
      </div>
          {filteredCommittees.map((committee, index) => (
            <div>
              <Image
                src={committee.image_url}
                alt={committee.name}
                width={900}
                height={900}
              />
              <p>{committee.rows[0]}<br/>{committee.rows[1]}</p>
            </div>
          ))}
      </div>
    </main>
  );
}