
function UserSlice({ children ,type}) {
  return (
    <p
      className={`w-28 flex h-11 items-center justify-center  min-w-25 border-2 bg-slate-50 p-1 py-3 text-center text-lg leading-5 ${type == 'head'&& 'font-bold '}`}
    >
      {children}
    </p>
  );
}

export default UserSlice;
