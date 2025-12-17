export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://play.workadventu.re/_/ddowyftas1/hackersir.org/2023-workadventure-map/map.tmj";
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
