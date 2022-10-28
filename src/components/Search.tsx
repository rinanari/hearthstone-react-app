import s from "../components/Search.module.scss";
export const Search = ({ setSearch, search }: any) => {
  return (
    <div>
      <form action="">
        <input
          className={s.input}
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
