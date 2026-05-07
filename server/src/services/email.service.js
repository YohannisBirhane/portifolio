const sendEmailNotification = async ({ name, email, message }) => {
	const configured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

	if (!configured) {
		return {
			success: false,
			message: 'Email service is not configured',
		};
	}

	return {
		success: true,
		message: 'Email notification skipped in this setup',
		data: { name, email, message },
	};
};

module.exports = {
	sendEmailNotification,
};
