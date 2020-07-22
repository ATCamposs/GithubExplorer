import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
 }

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

return (
  <>
  <Header>
    <img src={logoImg} alt="Github Explorer" />
  <Link to="/dashboard">
      <FiChevronLeft size={16} />
    Voltar
  </Link>
  </Header>

  <RepositoryInfo>
    <header>
      <img src="http://google.com" alt="Google inc" />
      <div>
        <strong>
          rocketseat/unform
        </strong>
        <p>
          descrição do repo
        </p>
      </div>
    </header>
    <ul>
      <li>
        <strong>1080</strong>
        <span>Stars</span>
      </li>
      <li>
        <strong>20</strong>
        <span>Forks</span>
      </li>
      <li>
        <strong>34</strong>
        <span>Issues Abertas</span>
      </li>
    </ul>
  </RepositoryInfo>

    <Issues>
          <Link
          to={`asdasdsad`}>
            <div>
              <strong>adasdsa</strong>
              <p>asdsdaas</p>
            </div>

          <FiChevronRight size={20} />
          </Link>

    </Issues>
  </>
  );
};

export default Repository;
