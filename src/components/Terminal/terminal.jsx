import { Card } from "antd";

const Terminal = () => (
    <Card style={{ background: "#1c1c1c", color: "#39ff14" }} bordered={false}>
      <pre>
        Harshrraj Interactive Terminal. {"\n\n"}
        {"            __/\__"} {"\n"}
{"                   |      |"} {"\n"}
{"      /            |  .   |\\ "} {"\n"}
{"     //            |      |\\\\ "} {"\n"}
{"    //             |______| \\\\ "} {"\n"}
{"   /               |      |   \\ "} {"\n"}
{"              /    |      |    \\ "} {"\n"}
{" /_________________|______|_________________\\"} {"\n"}
{"  \\    |      |    /"} {"\n"}
{"   \\   |______|   /"} {"\n"}
{"    \\__|______|__/"} {"\n"}
{"       |      |"} {"\n"}
        {"------------------------------------------------"} {"\n"}
        {"Welcome to my interactive web terminal."} {"\n"}
        {"For a list of available commands, type "}
        <span style={{ color: "#4a90e2" }}>`help`</span>. {"\n"}
        {" "}
      </pre>
    </Card>
  );

export default Terminal;