import { connect } from 'react-redux';
import { getImage, putData } from '../../utils/rest_api';
import { useEffect, useState } from 'react';
import { currentUserLogin } from '../../redux/actions/actions';
import './userInfo.css';

const UserInfo = ({ currentUser, updateCurrentUserInfo }) => {
  const [avatar, setAvatar] = useState(undefined);

  let imageName = currentUser.image;

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const [response, error] = await getImage(
        `http://localhost:3001/api/image/${imageName}`
      );
      if (error) console.log(error);
      else {
        setAvatar(response);
      }
    }
    fetchData();
  }, [imageName]);

  return (
    <div id="componentePerfil">
      <div className="flex-container row">
        <div className="col-12 col-md-3" id="imagenPerfil">
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".jpg, .jpeg"
                onChange={(event) => {
                  const files = event.target.files;
                  const formData = new FormData();
                  formData.append('image', files[0]);

                  fetch('http://localhost:3001/api/image', {
                    method: 'POST',
                    body: formData
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      putData(
                        `http://localhost:3001/api/user/image/${currentUser.user_email}`,
                        {
                          image: data.filename
                        }
                      );
                      updateCurrentUserInfo({
                        user_email: currentUser.user_email,
                        first_name: currentUser.first_name,
                        last_name: currentUser.last_name,
                        phone: currentUser.phone,
                        country: currentUser.country,
                        city: currentUser.city,
                        street: currentUser.street,
                        image: data.filename,
                        is_admin: currentUser.is_admin
                      });
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              />
              <label htmlFor="imageUpload"></label>
            </div>
            <div className="avatar-preview">
              <img
                src={avatar}
                className="img-fluid"
                alt="foto de perfil"
              ></img>
            </div>
          </div>
        </div>

        <div id="datosPerfil" className="col-12 col-md-9">
          <h3>Información Personal</h3>
          <p id="nombre">
            <span>Nombre:</span> {currentUser.first_name}
          </p>
          <p id="apellido">
            <span>Apellido:</span> {currentUser.last_name}
          </p>
          <p id="address">
            <span>Pais:</span> {currentUser.country}
          </p>
          <p id="address">
            <span>Ciudad:</span> {currentUser.city}
          </p>
          <p id="address">
            <span>Direccion:</span> {currentUser.street}
          </p>
          <p id="email">
            <span>Correo:</span> {currentUser.user_email}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userR.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentUserInfo: (currentUser) =>
    dispatch(currentUserLogin(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
