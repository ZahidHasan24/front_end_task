const ChatForm = ({
  sendMessage,
  inputRef,
  formValue,
  setFormValue,
  loading,
}) => {
  return (
    <form
      className="flex flex-col px-10 mb-2 md:px-32 join sm:flex-row"
      onSubmit={sendMessage}
    >
      <div className="flex items-stretch justify-between w-full align-middle">
        <textarea
          ref={inputRef}
          className="w-full grow input border-slate-300 max-h-[20rem] min-h-[3rem]"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button
          type="submit"
          className="btn ml-3 bg-tab tab-text-color hover:bg-tab hover:tab-text-color"
          disabled={!formValue || loading}
        >
          <p>Send</p>
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
