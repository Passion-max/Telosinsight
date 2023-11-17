import Image from 'next/image'
import styles from './ui/page.module.css'
import Link from 'next/link'
import HeaderBar from './ui/headerbar'
import FooterBar from './ui/footerBar'
import SmartContractForm from './ui/smartContractForm'
import SmartContractTable from './ui/smartContractTable'

export default function Home() {
  var cdata = [
    {
      address: '0x0000000057adE31957c141476aE5593Aa6B4F4D8',
      deploymentDate: 293908266,
      creatorAddress: '0x4e59b44847b379578588920cA78FbF26c0B4956C',
      type: 'none',
      transactions: 0,
      verificationStatus: 'NA',
      latestActivity: 'NA'
    },
    {
      address: '0x000b7D6bA92679c4fcDa6aF99033dB47cBEa068d',
      deploymentDate: 265917839,
      creatorAddress: '0xE4FE34cbB8475Fd3B56911eD119599525C973115',
      type: 'ERC-20: Fungible',
      transactions: 14,
      verificationStatus: 'NA',
      latestActivity: 269191725
    },
    {
      address: '0x002498b64817B533F35791c98b02f907779B804A',
      deploymentDate: 245867373,
      creatorAddress: '0x26f4b46e3f49687129081677e466fc5a99374795',
      type: 'ERC-20: Fungible',
      transactions: 3,
      verificationStatus: 'NA',
      latestActivity: 251712453
    },
    {
      address: '0x0022B3FB492596C86CF114b460D9Bd6a9cf80Ba2',
      deploymentDate: 229320275,
      creatorAddress: '0x9bd10E18842Eabe5Bd2ef3B12c831647FC84BF63',
      type: 'none',
      transactions: 0,
      verificationStatus: 'NA',
      latestActivity: 'NA'
    },
    {
      address: '0x0011b63496045B9cEFb9cC4eF79f43eAaA7fdE9D',
      deploymentDate: 214344208,
      creatorAddress: '0xd6F2B6A93dec9eB0372FA2f1cb05C37b8cBfB7a7',
      type: 'none',
      transactions: 0,
      verificationStatus: 'NA',
      latestActivity: 'NA'
    },
    {
      address: '0x0000299FB3a33B18358bB5854F21ed73cc7E0000',
      deploymentDate: 295966987,
      creatorAddress: '0x6D8FC79a79CD43d09f62149a8963Afc7335975D2',
      type: 'none',
      transactions: 0,
      verificationStatus: 'NA',
      latestActivity: 'NA'
    },
    {
      address: '0x00474bb991c6Ee634e68FC2DC8332352b008c52d',
      deploymentDate: 208505211,
      creatorAddress: '0x9Bc4FC3e163438BA5f8affC5f22a43C5e4f8625B',
      type: 'none',
      transactions: 45,
      verificationStatus: 'NA',
      latestActivity: 210912124
    },
    {
      address: '0x00186063C307009Fd554CcF5c13D6fE2BB6Dd5af',
      deploymentDate: 201961066,
      creatorAddress: '0xbeB9675666Ba77C29B760aF4f551Dcfef4fc7a84',
      type: 'none',
      transactions: 1,
      verificationStatus: 'NA',
      latestActivity: 201961066
    },
    {
      address: '0x00336826fbc948392C1A32b85182523107Ad2a27',
      deploymentDate: 197137571,
      creatorAddress: '0xbeB9675666Ba77C29B760aF4f551Dcfef4fc7a84',
      type: 'none',
      transactions: 1,
      verificationStatus: 'NA',
      latestActivity: 197137571
    },
    {
      address: '0x0044b50a759BcBD9e57A866982b4BF8735Be7fb6',
      deploymentDate: 276854603,
      creatorAddress: '0x77f2B73DC975a6E9172BB871FDaC31eBcC04C25a',
      type: 'none',
      transactions: 0,
      verificationStatus: 'NA',
      latestActivity: 'NA'
    }
  ]
  return (
    <main className="">
      <HeaderBar />
      <SmartContractForm />
      <SmartContractTable contracts={cdata} />
      <FooterBar />
    </main>
  )
}
