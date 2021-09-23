import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stars,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'usarname'} to={'/odarx'}>
          OdaRX
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/odarx/anitoon'}>
          anitoon
        </Link>
      </Breadcrumb>

      <p>Anime website created with bootstrap and laravel.</p>

      <Stars>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stars>

      <LinkButton href={'https://github.com/OdaRX/anitoon'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  )
}

export default Repo
