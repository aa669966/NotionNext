 // NotionNext/components/PoweredBy.js
import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      {/* 修改这里的内容 */}
      <span className='mr-1'>power by</span>
      <a
        href='https://aze66.top'
        className='underline justify-start'>
        行己所爱 {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
