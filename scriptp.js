// const form = document.getElementById('input-fields');
// const c_status = document.querySelector('.f-status');
// const login=document.querySelector('.s-status');
// const logoutput=document.querySelector('.Profiledetails');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
// const fullname = form.querySelector('.f-name').value;
// const email = form.querySelector('.email').value;
// const password = form.querySelector('.passw').value;
// const confirmPassword = form.querySelector('.r-passw').value;
//     if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
//         setTimeout( function() 
//         { 
//             c_status.innerHTML = 'Error : All the fields are mandatory';
//     },1000); 
// }
// else {
//     // Perform actual form submission here
//     // For example: form.submit();
//     c_status.style.display='none';
//     login.innerHTML = 'Successfully Signed Up! Redirecting...';
//     // display();

//     console.log("display");

//     const fullname = form.querySelector('.f-name').value;
//     const email = form.querySelector('.email').value;
//     const password = form.querySelector('.passw').value;
//     const confirmPassword = form.querySelector('.r-passw').value;

//     console.log(fullname);

//     const m_card=document.createElement("div");
//     m_card.classList.add("data-profile");
//     m_card.innerHTML=
//     `<header>Profile</header>
//     <div>Full Name:${fullname}</div>
//     <div>Email:${email}</div>
//     <div>Password:${password}</div>
// </div>`

// console.log(m_card.innerHTML);
// // log_output.innerHTML="";
// logoutput.appendChild(m_card);

// window.location.href="profile.html";

// }
// });
document.addEventListener('DOMContentLoaded', () => {
    const logoutput=document.querySelector(".pdetails");
    const form = document.getElementById("input-fields");
    const login = document.querySelector(".s-status");
    const c_status = document.querySelector(".f-status");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const fullname = form.querySelector(".f-name").value;
        const email = form.querySelector(".email").value;
        const password = form.querySelector(".passw").value;
        const confirmPassword = form.querySelector(".r-passw").value;

        if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
            setTimeout(function () {
                c_status.innerHTML = 'Error: All the fields are mandatory';
            }, 1000);
        } else {
            c_status.style.display = 'none';
            login.innerHTML = 'Successfully Signed Up! Redirecting...';
           
            const m_data = document.createElement("div");
            m_data.classList.add("data-profile");
            m_data.innerHTML = `
            <div class="copy">
                <header>Profile</header>
                <div>Full Name:${fullname}</div>
                <div>Email:${email}</div>
                <div>Password:${password}</div>
                </div>`
            console.log(m_data);
            const z=display(m_data);
            return z;
        }
    });
    function display(m_data)
{
    setTimeout(function () {
        console.log(logoutput);
        logoutput.appendChild(m_data);
        window.location.href = 'profile.html'; // Redirect after a delay
    }, 2000);
    return logoutput;
}
});

