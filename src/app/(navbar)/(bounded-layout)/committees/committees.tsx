"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "src/components/ui/button";

import Actor from "./_assets/committee/actor.jpg";
import Cl from "./_assets/committee/cl.jpg";
import Dancer2 from "./_assets/committee/dancer-2.jpg";
import Dancer1 from "./_assets/committee/dancer.jpg";
import Design from "./_assets/committee/design.jpg";
import It from "./_assets/committee/it.jpg";
import Mnt from "./_assets/committee/mnt.jpg";
import Musician from "./_assets/committee/musician.jpg";
import Muw from "./_assets/committee/muw.jpg";
import Pubs from "./_assets/committee/pubs.jpg";
import Setprops from "./_assets/committee/setprops.jpg";
import Sfd from "./_assets/committee/sfd.jpg";
import TOPSArtProd from "./_assets/committee/tops-art-prod.jpg";
// Example imports (one per file).
import TopsArtProd from "./_assets/committee/tops-art-prod.jpg";
import TopsDirector from "./_assets/committee/tops-director.jpg";
import TopsEa from "./_assets/committee/tops-ea.jpg";
import TopsStageDir from "./_assets/committee/tops-stage-dir.jpg";
import Welfare from "./_assets/committee/welfare.jpg";
import Writer from "./_assets/committee/writer.jpg";

// Then build your committees array with the imported images:
const committees = [
  {
    type: "tops",
    name: "Art Production",
    image_url: TopsArtProd.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Actor/Actress",
    image_url: Actor.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Musician",
    image_url: Musician.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Dancer",
    image_url: Dancer1.src,
    rows: [],
  },
  {
    // second dancer
    type: "artprod",
    name: "Dancer (2)",
    image_url: Dancer2.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Makeup & Wardrobe",
    image_url: Muw.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Sound Effect Designer",
    image_url: Sfd.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Sets, Property & Equipment",
    image_url: Setprops.src,
    rows: [],
  },
  {
    type: "tops",
    name: "Stage Director",
    image_url: TopsStageDir.src,
    rows: [],
  },
  {
    type: "tops",
    name: "External Affairs",
    image_url: TopsEa.src,
    rows: [],
  },
  {
    type: "extaff",
    name: "Corporate Liaison",
    image_url: Cl.src,
    rows: [],
  },
  {
    type: "extaff",
    name: "Marketing & Ticketing",
    image_url: Pubs.src,
    rows: [],
  },
  {
    // Additional committees inferred from filenames
    type: "extaff",
    name: "Publicity",
    image_url: Design.src,
    rows: [],
  },
  {
    type: "artprod",
    name: "Scriptwriter",
    image_url: Writer.src,
    rows: [],
  },
  {
    type: "extaff",
    name: "Information Technology",
    image_url: It.src,
    rows: [],
  },
  {
    type: "extaff",
    name: "Marketing & Ticketing",
    image_url: Mnt.src,
    rows: [],
  },
  {
    type: "extaff",
    name: "Welfare",
    image_url: Welfare.src,
    rows: [],
  },
  {
    type: "tops",
    name: "TOPS Director",
    image_url: TopsDirector.src,
    rows: [],
  },
];

export default function Committees() {
  const [selectedType, setSelectedType] = useState("artprod");
  const [selectedName, setSelectedName] = useState("TOPS & MC");
  const [filteredCommittees, setFilteredCommittees] = useState(
    committees.filter(
      (committee) =>
        committee.type === "artprod" && committee.name === "TOPS & MC",
    ),
  );

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    const defaultName = type === "artprod" ? "TOPS & MC" : "TOPS & MC";
    setSelectedName(defaultName);
    setFilteredCommittees(
      committees.filter(
        (committee) =>
          committee.type === type && committee.name === defaultName,
      ),
    );
  };
  const handleNameSelection = (name: string) => {
    setSelectedName(name);
    setFilteredCommittees(
      committees.filter(
        (committee) =>
          committee.type === selectedType && committee.name === name,
      ),
    );
  };

  const buttonStyle = (isActive: boolean) =>
    isActive
      ? "bg-primary-700 text-white rounded-[10px] text-[18px] flex-none p-[10px] m-[10px]"
      : "bg-transparent text-primary-700 rounded-[10px] text-[18px] flex-none p-[10px] m-[10px]";
  const buttonStyle2 = (isActive: boolean) =>
    isActive
      ? "bg-white text-primary-700 border-2 border-primary-700 rounded-[40px] text-[18px] flex-none p-[10px] m-[10px]"
      : "bg-secondary-300 text-black rounded-[40px] text-[18px] flex-none p-[10px] m-[10px]";

  return (
    <main>
      <main className="font-safira-march">
        Committees<br></br>
      </main>
      <div className="--font-mont">
        <div className="flex max-w-fit overflow-x-auto max-h-max">
          <Button
            variant="outline"
            size="lg"
            id="tablinks2"
            onClick={() => handleTypeSelection("tops")}
            className={buttonStyle2(selectedType === "tops")}
          >
            TOPS
          </Button>
          <Button
            variant="outline"
            size="lg"
            id="tablinks2"
            onClick={() => handleTypeSelection("artprod")}
            className={buttonStyle2(selectedType === "artprod")}
          >
            Arts & Productions
          </Button>
          <Button
            variant="outline"
            size="lg"
            id="tablinks2"
            onClick={() => handleTypeSelection("extaff")}
            className={buttonStyle2(selectedType === "extaff")}
          >
            External Affairs
          </Button>
        </div>
        <div>
          {/* {selectedType === "artprod" && (
            <div className="flex max-w-fit overflow-x-auto max-h-max">
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("TOPS & MC")}
                className={buttonStyle(selectedName === "TOPS & MC")}
              >
                TOPS & MC
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Actor/Actress")}
                className={buttonStyle(selectedName === "Actor/Actress")}
              >
                Actor/Actress
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Musician")}
                className={buttonStyle(selectedName === "Musician")}
              >
                Musician
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Dancer")}
                className={buttonStyle(selectedName === "Dancer")}
              >
                Dancer
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Makeup & Wardrobe")}
                className={buttonStyle(selectedName === "Makeup & Wardrobe")}
              >
                Makeup & Wardrobe
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Sound Effect Designer")}
                className={buttonStyle(
                  selectedName === "Sound Effect Designer",
                )}
              >
                Sound Effect Designer
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() =>
                  handleNameSelection("Sets, Property & Equipment")
                }
                className={buttonStyle(
                  selectedName === "Sets, Property & Equipment",
                )}
              >
                Sets, Property & Equipment
              </Button>

            </div>
          )}
          {selectedType === "extaff" && (
            <div className="flex max-w-fit overflow-x-auto max-h-max">
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("TOPS & MC")}
                className={buttonStyle(selectedName === "TOPS & MC")}
              >
                TOPS & MC
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Corporate Liaison")}
                className={buttonStyle(selectedName === "Corporate Liaison")}
              >
                Corporate Liaison
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() => handleNameSelection("Marketing & Ticketing")}
                className={buttonStyle(
                  selectedName === "Marketing & Ticketing",
                )}
              >
                Marketing & Ticketing
              </Button>
              <Button
                variant="ghost"
                size="lg"
                id="tablinks"
                onClick={() =>
                  handleNameSelection("Publicity, Publication & IT (PPIT)")
                }
                className={buttonStyle(
                  selectedName === "Publicity, Publication & IT (PPIT)",
                )}
              >
                Publicity, Publication & IT
              </Button>
            </div>
          )} */}
          <div className="flex max-w-fit overflow-x-auto max-h-max">
            {committees
              .filter((committee) => committee.type === selectedType)
              .map((committee, index) => (
                <Button
                  variant="outline"
                  size="lg"
                  id="tablinks2"
                  key={index}
                  onClick={() => handleNameSelection(committee.name)}
                  className={buttonStyle2(selectedName === committee.name)}
                >
                  {committee.name}
                </Button>
              ))}
          </div>
        </div>
        {filteredCommittees.map((committee, index) => (
          <div key={index}>
            <Image
              src={committee.image_url}
              alt={committee.name}
              width={900}
              height={900}
            />
            <p>
              {committee.rows[0]}
              <br />
              {committee.rows[1]}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
