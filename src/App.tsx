import "./App.css";
import ProfileCard from "./components/ProfileCard";
import List from "./components/List";

const profile = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB53FRQ-7JhipkxgkX2njAf4unvM3AU7puUGfmQUbjpA&s",
  name: "Машнов Вячеслав Валерьевич",
};

const competenceList = ["CSS", "SQL", "HTML", "JS"];

const technologyList = [
  "React",
  "Node",
  "Server",
  "DI",
  "QA",
  "SCRUM",
  "Agile",
  "Git",
  "UX/UI",
  "Microservices",
];

function App() {
  return (
    <div className="container">
      <ProfileCard url={profile.img} name={profile.name} />
      <List items={competenceList} title={"Мои компетенции"} />
      <List items={technologyList} title={"Что я хочу изучить"} />
    </div>
  );
}

export default App;
