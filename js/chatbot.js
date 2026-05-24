function sendMessage(){

    let input =
        document.getElementById(
            "userInput"
        ).value.toLowerCase();

    let response =
        "Please contact our support team.";

    if(input.includes("veltroz")){

        response =
            "Veltroz is an innovative technology company.";
    }

    else if(input.includes("services")){

        response =
            "We provide website, app and AI solutions.";
    }

    else if(input.includes("contact")){

        response =
            "Email: support@veltroz.com";
    }

    else if(input.includes("mission")){

        response =
            "Our mission is to build innovative digital solutions.";
    }

    const messages =
        document.getElementById(
            "messages"
        );

    messages.innerHTML +=
        `<div class='user-msg'>
            ${input}
        </div>`;

    messages.innerHTML +=
        `<div class='bot-msg'>
            ${response}
        </div>`;

    document.getElementById(
        "userInput"
    ).value = "";
}