// Style
import "./App.css";

// image
import avatar from "./assets/image/avatar.jpg";
import avatar2 from "./assets/image/1.jpg";

function App() {
  return (
    <>
      <header className="header p-3 px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="right-side-header d-flex align-items-center">
            <a href="#" className="toggle-dropdown d-flex align-items-center">
              <span className="me-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-secondary"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
              <figure>
                <img
                  className="image-avatar"
                  src={avatar}
                  alt="img"
                  height="45"
                  width="45"
                />
              </figure>
            </a>
            <form
              action="#"
              className="ms-4 bg-custom-secondary p-3 rounded-pill"
            >
              <input
                className="bg-transparent"
                placeholder="جست وجو در پیام ها"
                type="text"
              />
              <button type="button" className="bg-transparent text-white p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  height="20"
                  width="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="left-side-header text-white d-flex align-items-center">
            <p className="bg-custom-secondary me-3 p-2 px-3 rounded-pill">
              <span>01:35:25</span>
            </p>
            <p className="p-2 pe-4 border-end">
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            </p>
            <span className="bg-primary p-2 rounded text-white ms-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                height="25"
                width="25"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
          </div>
        </div>
      </header>
      <main className="w-100 h-100 mt-4 px-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 bg-custom-secondary rounded"></div>
            <div className="col-9 h-100 ps-5">
              <div className="clint-wrapper gap-x-2 mb-3">
                <img className="w-100 rounded" src={avatar2} alt="sd" />
                <img className="w-100 rounded" src={avatar2} alt="sd" />
                <img className="w-100 rounded" src={avatar2} alt="sd" />
                <img className="w-100 rounded" src={avatar2} alt="sd" />
                <img className="w-100 rounded" src={avatar2} alt="sd" />
                <img className="w-100 rounded" src={avatar2} alt="sd" />
              </div>
              <div className="clint-main mb-4">
                <img className="rounded w-100" src={avatar2} alt="sd" />
              </div>
              <div className="panel-bottom d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-danger fs-14px p-2 px-3 me-auto"
                >
                  خروج از جلسه
                </button>
                <button
                  type="button"
                  className="btn bg-custom-secondary text-white p-12px me-3"
                  title="more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn bg-custom-secondary text-white p-12px me-3"
                  title="more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn bg-primary text-white p-12px me-3"
                  title="more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn bg-custom-secondary text-white p-12px me-3"
                  title="more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn bg-custom-secondary text-white p-12px me-3"
                  title="more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height="24"
                    width="24"
                  >
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn bg-danger text-white p-12px me-3"
                  title="more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
                <div className="bg-custom-secondary ms-auto rounded text-white px-3 d-flex align-items-center">
                  <span className="d-block pe-3 me-3 border-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                    </svg>
                  </span>
                  <span>usv-xsaf-add</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
