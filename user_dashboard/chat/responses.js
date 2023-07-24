function getBotResponse(userText) {
  // Common responses
  if (userText.includes("hi") || userText.includes("hello")) {
    return "Hello! How can I assist you?";
  } else if (userText.includes("bye")) {
    return "Goodbye! Have a great day!";
  }

  // Custom responses based on user input
  if (userText === "1") {
    return " Autism spectrum disorder (ASD) is a developmental disability caused by differences in the brain. People with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors or interests. People with ASD may also have different ways of learning, moving, or paying attention.";
  } else if (userText === "2") {
    return "The core symptoms of autism are:<br/>a. Social Communication Challenges<br/>b. Restricted, Repetitive Behaviors.";
  } else if (userText === "3") {
    return "Applied Behaviour Analysis (ABA) is an approach to understanding and changing behaviour. It's not a specific therapy itself, but a range of different strategies and techniques that can be used to help autistic people learn new skills and behaviour.";
  } else if (userText === "4") {
    return "Certainly! Here is our NGO specific to Malaysia that can help individuals and families better understand autism and its associated traits: https://www.facebook.com/projectlilymy/"
  } else if (userText === "5") {
    return "Certainly! Here is some Local Autism Healthcare in Malaysia:<br/><br/>a. <a href= www.ummc.edu.my ><b>University Malaya Medical Centre (UMMC):</b></a> UMMC is a leading medical institution in Malaysia that provides a range of healthcare services, including assessment and management of autism.They have specialists in pediatric neurology, developmental pediatrics, and child psychiatry.<br/><br/>b. <a href= www.hkl.gov.my ><b>Hospital Kuala Lumpur (HKL):</b></a> HKL is a government - funded hospital that provides medical services, including assessment and intervention for autism.They have a pediatric department that may have specialists who can assist with autism - related concerns.<br/><br/>c. <a href= www.princecourt.com><b>Prince Court Medical Centre:</b></a> Prince Court is a private hospital in Kuala Lumpur that offers comprehensive healthcare services, including autism assessment and management.They have pediatric specialists who can provide expert evaluation and guidance.";
  } else if (userText === "6") {
    return "Coping strategies can be helpful for individuals with autism to manage challenges, reduce stress, and enhance overall well-being. Here are some coping strategies that can be beneficial:<br/><br/><b>a. Self-regulation techniques:</b> Engaging in activities that promote self-regulation can be helpful, such as deep breathing exercises, progressive muscle relaxation, or sensory-based activities that provide comfort and calming sensations.<br/><br/><b>b. Visual Supports:</b> Visual supports, such as visual schedules, social stories, or visual cues, can aid in understanding and following routines, managing transitions, and enhancing communication and comprehension.<br/><br/><b>c. Special Interests and Hobbies:</b> Encouraging engagement in special interests and hobbies provides a sense of enjoyment and can serve as a coping mechanism. These activities can offer a way to relax, focus, and find solace during challenging times.<br/><br/><b>d. Sensory Breaks:</b> Taking sensory breaks when feeling overwhelmed or overstimulated can be beneficial. Finding a quiet and calm space, using sensory tools like fidget toys or weighted blankets, or engaging in preferred sensory activities can help regulate sensory input.<br/><br/><b>e. Social Support Networks:</b> Building and maintaining social support networks can provide a sense of belonging, understanding, and emotional support. This can include connecting with friends, family, support groups, or online communities of individuals with autism.<br/><br/><b>f. Communication Strategies:</b> Developing and utilizing effective communication strategies can aid in expressing needs, concerns, and emotions. This can involve using visual aids, augmentative and alternative communication (AAC) systems, or practicing social scripts and role-playing.<br/><br/><b>g. Structured Routines and Predictability:</b> Establishing structured routines and maintaining a predictable environment can provide a sense of stability and reduce anxiety. Clear schedules, visual timetables, and consistent expectations can help individuals with autism navigate daily activities with less stress.<br/><br/><b>h. Mindfulness and Relaxation Techniques:</b> Practicing mindfulness exercises, meditation, or relaxation techniques can promote self-awareness, reduce stress, and enhance emotional well-being. These techniques can help individuals with autism manage anxiety or sensory overload.<br/><br/><b>i. Advocacy and Self-Advocacy:</b> Developing self-advocacy skills and advocating for one's needs and rights can empower individuals with autism. Learning about their strengths, challenges, and rights can help build self-esteem and improve self-confidence.";
  } else {
    return "I'm sorry, I don't have the information you're looking for. Can you please try asking a different question?";
  }
}

function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function firstBotMessage() {
  let firstMessage = "Hi, I'm AutiBot! I'm here to help you. What would you like to know?";
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

  const x = $('.full-chat-block');
  x.css({
    "-ms-overflow-style": "none",
    "scrollbar-width": "none"
  });

  let time = getTime();
  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);

  let secondMessage = "Here are some options you can try:<br><br>1. Option 1<br>2. Option 2<br>3. Option 3<br>4. Option 4";

  setTimeout(() => {
    let botHtml = '<p class="botText"><span>' + secondMessage + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 1000);
}

firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  if (botResponse) {
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }
}

function getResponse() {
  let userText = $("#textInput").val();
  if (userText === "") {
    return;
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

$("#textInput").keypress(function (e) {
  if (e.which === 13) {
    getResponse();
  }
});
