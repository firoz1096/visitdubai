import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const ReactApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="971507687303"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="50"
			iconColor="white"
			iconBgColor="#4dc247"
			headerIcon="images/support.png"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#095e54"
			headerTitle="Visit Dubai Support"
			headerCaption="Typically replies within a day"
			bodyBgColor="#e5ddd5"
			chatPersonName="Nazmul Haque"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#f0f0f0"
			placeholder="Type a message.."
			btnBgColor="#4fce5d"
			btnTxt="Start Chat"
			btnTxtColor="white"
		/>
	);
};

export default ReactApp;