"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "src/components/ui/button";

import committees from "./_assets/photoshoot";

function onlyUnique<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

export default function Committees() {
  const [selectedType, setSelectedType] = useState("Arts & Production");
  const [selectedName, setSelectedName] = useState("Actors");
  const [filteredCommittees, setFilteredCommittees] = useState(
    committees.filter(
      (committee) =>
        committee.type === "Arts & Production" && committee.name === "Actors",
    ),
  );

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    const defaultName =
      type === "Arts & Production"
        ? "Actors"
        : type === "External Affairs"
          ? "Corporate Liaison"
          : "TOPS";
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

  // return type list unique
  const committeeList = useMemo(() => {
    return committees.map((committee) => committee.type).filter(onlyUnique);
  }, []);

  return (
    <main>
      <main className="font-safira-march">
        Committees<br></br>
      </main>
      <div className="--font-mont">
        <div className="flex max-w-fit overflow-x-auto max-h-max">
          {/* {committees.map((committee, index) => (
            <Button
              variant="outline"
              size="lg"
              id="tablinks2"
              key={index}
              onClick={() => handleTypeSelection(committee.type)}
              className={buttonStyle2(selectedType === committee.type)}
            >
              {committee.type}
            </Button>
          ))} */}
          {committeeList.map((type, index) => (
            <Button
              variant="outline"
              size="lg"
              id="tablinks2"
              key={index}
              onClick={() => handleTypeSelection(type)}
              className={buttonStyle2(selectedType === type)}
            >
              {type}
            </Button>
          ))}
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
            {selectedType !== "TOPS" &&
              committees
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
        {filteredCommittees.map((committee, idx1) => (
          <div key={idx1}>
            {[committee.image_src].flat().map((image_src, index) => (
              <Image
                key={index}
                className="rounded-3xl"
                src={image_src}
                alt={committee.name}
                width={700}
                height={700}
                quality={85}
              />
            ))}
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {committee.members.map((member, idx2) => {
                return (
                  <div key={`${idx1}-${idx2}`} className="p-8">
                    <Image
                      className="rounded-3xl"
                      src={member.image_src}
                      alt={member.name}
                      width={700}
                      height={700}
                      quality={85}
                    />
                    <p className="mt-2 text-center font-mont-safira">
                      {member.name}
                    </p>
                    <p className="text-center font-mont-safira text-sm text-slate-400">
                      {member.course}
                    </p>
                    <p className="text-center text-slate-600 text-sm">
                      {member.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
