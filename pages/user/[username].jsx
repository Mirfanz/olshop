import axios from "axios";
export async function getServerSideProps(context) {
  const { username } = context.query;
  let data = {};
  await axios
    .get(`http://localhost:3000/api/user/${username}`)
    .then((resp) => {
      data = resp.data.data;
    })
    .catch((err) => {});

    
  return {
    props: {
      data,
    },
  };
}

const username = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <td> Nama</td>
            <td>:</td>
            <td>{data.fullname ?? "-"}</td>
          </tr>
          <tr>
            <td> Email</td>
            <td>:</td>
            <td>{data.email ?? "-"}</td>
          </tr>
          <tr>
            <td> Username</td>
            <td>:</td>
            <td>{data.username ?? "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default username;
