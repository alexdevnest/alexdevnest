import Calendly from "@components/Calendly";


export default function Meeting () {
  return (
    <>
      <Calendly />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
}