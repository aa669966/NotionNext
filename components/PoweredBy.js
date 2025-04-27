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
      <span className='mr-1'>由其他内容驱动</span>
      <a
        href='https://github.com/tangly1024/NotionNext'
        className='underline justify-start'>
        自定义名称 {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
