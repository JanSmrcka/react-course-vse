import { memo, useDeferredValue, useState } from 'react'
import nacl from 'tweetnacl'
import naclUtil from 'tweetnacl-util'

type VerificationCodeProps = { userId: string; isStale: boolean }

// This is for example really happening in WhatsApp or Signal
// > Iteratively SHA-512 hash the sorted Identity Keys and user identifier 5200 times.
const VerificationCode: React.FC<VerificationCodeProps> = ({ userId, isStale }) => {
  if (isStale) {
    return <div>Code: Calculating...</div>
  }
  let hash = naclUtil.decodeUTF8(userId)
  ;[...Array(520000)].forEach(() => {
    hash = nacl.hash(hash)
  })

  return <div>Code: {naclUtil.encodeBase64(hash)}</div>
}

const MemoizedVerificationCode = memo(VerificationCode)

function App() {
  const [userId, setUserId] = useState('c8071923-cc08-4cd6-aeb2-d0b1ddf29863')
  const defferedUserId = useDeferredValue(userId)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            setUserId('c8071923-cc08-4cd6-aeb2-d0b1ddf29863')
          }}
        >
          Jane
        </button>
        <button
          onClick={() => {
            setUserId('af9639e3-ae6e-45d6-856d-46f799718c72')
          }}
        >
          Anna
        </button>
      </div>
      <div>UserId: {userId}</div>
      <MemoizedVerificationCode isStale={defferedUserId !== userId} userId={defferedUserId} />
    </>
  )
}

export default App
