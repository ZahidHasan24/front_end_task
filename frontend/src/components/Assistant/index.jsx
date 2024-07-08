const Assistant = ({ aiAssitantList, setAiAssistant, aiAssitant }) => {
  return (
    <div className="mx-auto my-4 tabs tabs-boxed w-fit bg-neutral">
      {aiAssitantList?.map((assitant) => (
        <a
          onClick={() => setAiAssistant(assitant)}
          className={`${aiAssitant == assitant && "tab-active"} tab`}
          key={assitant}
        >
          {assitant}
        </a>
      ))}
    </div>
  );
};
export default Assistant;
