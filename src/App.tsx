import data from "@/data/data1.json";
import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Pagination } from "./components/Main/Pagination";
import { Panel } from "./components/Main/Panel";
import { Session } from "./components/Main/Session";
import { ITEMS_PER_PAGE } from "./constants/itemsPerPage.constants";
import { useSearchTerm } from "./store/useSearchTerm";

function App() {
  const { searchTerm } = useSearchTerm();

  const dataSession = data.sessions.filter((session, index, self) => self.findIndex((s) => s.id === session.id) === index);

  const filteredSessions = dataSession.filter((session) => session.module.toLowerCase().includes(searchTerm.toLowerCase()));

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(filteredSessions.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredSessions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <Container>
      <div className="flex w-full">
        <Panel />
        <div className="bg-main w-full">
          <div className="bg-white py-4 px-6 rounded-xl m-2">
            <Header />

            <Session paginatedData={paginatedData} />

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
