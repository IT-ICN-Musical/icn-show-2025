import Image from "next/image";

const committees = [
  {
    type: "artprod",
    name: "Tops & MC",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Actor/Actress",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Musician",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Dancer",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Makeup & Wardrobe",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Sound Effect Designer",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Sets, Property & Equipment",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "artprod",
    name: "Assistant State Manager",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "extaff",
    name: "TOPS & MC",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "extaff",
    name: "Corporate Liaison",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "extaff",
    name: "Marketing & Ticketing",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
  {
    type: "extaff",
    name: "Publicity, Publication & IT (PPIT)",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/R151_train_at_Tuas_Depot.jpg/450px-R151_train_at_Tuas_Depot.jpg",
    rows: ["first row:...", "second row:...."],
  },
];

export default function Committees() {
  return (
    <main>
      Committees<br></br>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Image</th>
            <th>Rows</th>
          </tr>
        </thead>
        <tbody>
          {committees.map((committee, index) => (
            <tr key={index}>
              <td>{committee.type}</td>
              <td>{committee.name}</td>
              <td>
                <Image
                  src={committee.image_url}
                  alt={committee.name}
                  width={100}
                  height={100}
                />
              </td>
              <td>{committee.rows.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
