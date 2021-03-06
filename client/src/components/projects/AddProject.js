import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import projectApi from "../../apis/projects";

import ProjectForm from "./ProjectForm";

const AddProject = () => {
  const history = useHistory();

  const [project, setProject] = useState({ title: "", description: "" });

  async function handleSubmit(data) {
    try {
      // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
      await projectApi.post("", data);
      // Redirecionar de volta para lista de Projetos
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Project</h1>
      <hr></hr>
      <ProjectForm
        handleSubmit={handleSubmit}
        setProject={setProject}
        project={project}
      />
    </div>
  );
};

export default AddProject;
