import React from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

function Form() {
  const { handleSubmit, register } = useForm();

  const submit = (data) => {
    console.log(data);
    const token ="eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ";

    data = JSON.stringify({});

    var config = {
      method: "post",
      url: "https://sistemacaliva.com/api/front-test",
      headers: {
        "test-key":
          token,
        "Content-Type": "application/json",
        Cookie:
          "XSRF-TOKEN=eyJpdiI6Ino0NUowb1c1WlcxNEZmY1h3ckpTdVE9PSIsInZhbHVlIjoiVDdDOXJtKzhXbFBwYjNIWUVVY09UWFlaRkgyNDZCY2kzU3U1dm83R2hWbzNNQ2laWFVNaTl3dWl5WlVqc1RNVnNEaE9Ia2xMTk9uNEtkelwvWXAyb2RRPT0iLCJtYWMiOiI5MjZlMzRlNDQ0ZmE4NmEwNjJkODE1ZjdkYzQ1OGZjMzZhYTA5YjNkMjU0NGZlYjdkNjYwYzNiYTI5M2VjYWI1In0%3D; laravel_session=eyJpdiI6IkMzdGg5TVwvS1RCVzRaK0pZVjV4V0JnPT0iLCJ2YWx1ZSI6Im9WRUpJRzJudmdMaklDS3p2RTdYZFVXNXk2N0QxRzB4aU1JM2JoTEpma0pWMTNnUVdxWEd0TzJadTBKTzNsbm11bU5yU0o4ektoanpXUVdRV21PSUh3PT0iLCJtYWMiOiIzN2ZhMTY0YzA1OTQxNWRiZmZkMDQ3YWNkY2NhNTAyNGQ0ZDAyMTkyZmYwMTA0ZDMwODhjZDllMGUyNjVmMWM2In0%3D",
      },
      data: data,
    };

    Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    /* const config = {
            headers: { 'test-key': token 'Content-Type': 'application/json'},
            
            
        };
        
        const bodyParameters = {
           key: data
        };
        
        Axios.post( 
          'https://sistemacaliva.com/api/front-test',
          bodyParameters,
          config
        ).then(response => {
            console.log(response)
            /* if (response && response.status === true) {
                
            } */
    /*  })
        .catch(error => {
            console.log(error)
        }); */
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Formulario</h1>
        <div className="form-row">
          <div className="col col1">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              {...register("name")}
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              {...register("email")}
            />

            <input
              type="tel"
              name="tel"
              placeholder="Teléfono"
              {...register("tel")}
            />
          </div>

          <div className="col col2">
            <select id="" name="provincia" {...register("provincia")}>
              <option defaultValue="true">Provincia</option>
              <option>Bs As</option>
            </select>

            <select id="" name="horario" {...register("horario")}>
              <option defaultValue="true">Horario de contacto</option>
              <option>10:00hs</option>
            </select>

            <input
              type="text"
              name="consulta"
              placeholder="Consulta"
              {...register("consulta")}
            />

            <button type="submit">ENVIAR</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
