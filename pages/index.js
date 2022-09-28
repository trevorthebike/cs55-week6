import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout';


export default function Home({ allData }) { 
  return (
      <Layout home>
        console.log(allData);
        <h3> Sorted names with links </h3>
        <div className="list-group">
          <a href={`friends/MCXDCBPV6Jx5280rP7AA/`}>Mo</a><n></n>
          <a href={`friends/X6nDcpOngYEYLMh0hdpc/`}>Al</a>
          <a href={`friends/jQhBdC2lXzIdexLqHtBr/`}>Bob</a>
          <a href={`persons/3Lc0ZHwNN0T7pRmlkNYZ/`}>Person 1</a>
          <a href={`persons/XAlrbqEpYedG5vFM3xV9/`}>Person 2</a>
          <a href={`persons/fC3uc8IK74PJ9v3utAVP/`}>Person 3</a>
        </div>
      </Layout>
  );
}