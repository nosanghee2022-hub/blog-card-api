import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const BLOG_NAME = 'AI 서랍'

function renderCard(data) {
  const { style = 0, subtitle = '핵심 포인트', keyPoints = [], index = 0, total = 1 } = data
  const templates = [renderA, renderB, renderC, renderD, renderE, renderF]
  return templates[style % 6](subtitle, keyPoints, index, total)
}

function renderA(subtitle, kp, idx, total) {
  const label = total > 1 ? ` · ${idx+1}/${total}` : ''
  const colors = ['#667EEA','#764BA2','#9F7AEA']
  return {
    type: 'div', props: { style: { width:800,height:480,background:'linear-gradient(135deg,#667EEA 0%,#764BA2 100%)',padding:28,display:'flex',fontFamily:'NotoSansKR' }, children:
      { type:'div', props:{ style:{ background:'white',borderRadius:20,padding:'40px 44px',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center' }, children:[
        { type:'div', props:{ style:{ fontSize:13,color:'#667EEA',fontWeight:700,letterSpacing:2,marginBottom:12,display:'flex' }, children: BLOG_NAME+' · 핵심 정리'+label }},
        { type:'div', props:{ style:{ width:40,height:3,background:'linear-gradient(90deg,#667EEA,#764BA2)',marginBottom:20,borderRadius:2,display:'flex' }}},
        { type:'div', props:{ style:{ fontSize:26,fontWeight:900,color:'#111827',marginBottom:28,lineHeight:1.35,display:'flex' }, children: subtitle }},
        ...kp.map((p,i) => ({ type:'div', props:{ style:{ display:'flex',alignItems:'center',marginBottom:16 }, children:[
          { type:'div', props:{ style:{ width:32,height:32,background:colors[i%3],borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',marginRight:14,flexShrink:0 }, children:
            { type:'span', props:{ style:{ color:'white',fontSize:14,fontWeight:800 }, children: String(i+1) }}}},
          { type:'span', props:{ style:{ fontSize:18,color:'#374151',fontWeight:500 }, children: p }}
        ]}}))
      ]}}
    }
  }
}

function renderB(subtitle, kp, idx, total) {
  const label = total > 1 ? ` · ${idx+1}/${total}` : ''
  const emojis = ['⚡','🧠','🔗','🎯','💡']
  return {
    type:'div', props:{ style:{ width:800,height:480,background:'#0F172A',padding:'40px 48px',display:'flex',flexDirection:'column',justifyContent:'center',fontFamily:'NotoSansKR' }, children:[
      { type:'div', props:{ style:{ display:'flex',alignItems:'center',marginBottom:24 }, children:[
        { type:'div', props:{ style:{ width:4,height:28,background:'#38BDF8',borderRadius:2,marginRight:12,display:'flex' }}},
        { type:'span', props:{ style:{ fontSize:13,color:'#38BDF8',fontWeight:700,letterSpacing:2 }, children: BLOG_NAME+' · TECH INSIGHT'+label }}
      ]}},
      { type:'div', props:{ style:{ fontSize:28,fontWeight:900,color:'#F8FAFC',marginBottom:32,lineHeight:1.35,display:'flex' }, children: subtitle }},
      { type:'div', props:{ style:{ display:'flex',flexDirection:'column',gap:14 }, children:
        kp.map((p,i) => ({ type:'div', props:{ style:{ background:'rgba(56,189,248,0.08)',border:'1px solid rgba(56,189,248,0.2)',borderRadius:12,padding:'14px 20px',display:'flex',alignItems:'center' }, children:[
          { type:'span', props:{ style:{ fontSize:20,marginRight:14 }, children: emojis[i%5] }},
          { type:'span', props:{ style:{ fontSize:17,color:'#E2E8F0',fontWeight:500 }, children: p }}
        ]}}))
      }}
    ]}
  }
}

function renderC(subtitle, kp, idx, total) {
  const label = total > 1 ? ` ${idx+1}/${total}` : ''
  const padded = [...kp,'','',''].slice(0,3)
  return {
    type:'div', props:{ style:{ width:800,height:480,background:'#FFFFFF',padding:'44px 52px',display:'flex',flexDirection:'column',justifyContent:'center',border:'1px solid #E5E7EB',fontFamily:'NotoSansKR' }, children:[
      { type:'div', props:{ style:{ fontSize:12,color:'#9CA3AF',fontWeight:700,letterSpacing:3,marginBottom:20,display:'flex' }, children: BLOG_NAME+label }},
      { type:'div', props:{ style:{ fontSize:30,fontWeight:900,color:'#111827',marginBottom:12,lineHeight:1.3,display:'flex' }, children: subtitle }},
      { type:'div', props:{ style:{ width:'100%',height:1,background:'#E5E7EB',margin:'20px 0',display:'flex' }}},
      { type:'div', props:{ style:{ display:'flex',gap:24 }, children:
        padded.map((p,i) => ({ type:'div', props:{ style:{ flex:1,display:'flex',flexDirection:'column',alignItems:'center' }, children:[
          { type:'div', props:{ style:{ fontSize:36,fontWeight:900,color:'#F97316',lineHeight:1,display:'flex' }, children: '0'+(i+1) }},
          { type:'div', props:{ style:{ fontSize:14,color:'#6B7280',marginTop:8,lineHeight:1.5,display:'flex',textAlign:'center' }, children: p }}
        ]}}))
      }}
    ]}
  }
}

function renderD(subtitle, kp, idx, total) {
  const label = total > 1 ? ` · ${idx+1}/${total}` : ''
  const mainColors = ['#10B981','#3B82F6','#8B5CF6','#EF4444','#F59E0B']
  const color = mainColors[idx%5]
  return {
    type:'div', props:{ style:{ width:800,height:480,background:color,display:'flex',fontFamily:'NotoSansKR' }, children:[
      { type:'div', props:{ style:{ width:280,padding:'44px 36px',display:'flex',flexDirection:'column',justifyContent:'center',flexShrink:0 }, children:[
        { type:'div', props:{ style:{ fontSize:11,color:'rgba(255,255,255,0.7)',fontWeight:700,letterSpacing:2,marginBottom:16,display:'flex' }, children: BLOG_NAME+' · SUMMARY'+label }},
        { type:'div', props:{ style:{ fontSize:26,fontWeight:900,color:'white',lineHeight:1.4,display:'flex' }, children: subtitle }},
        { type:'div', props:{ style:{ width:30,height:3,background:'rgba(255,255,255,0.5)',marginTop:16,borderRadius:2,display:'flex' }}}
      ]}},
      { type:'div', props:{ style:{ flex:1,background:'white',padding:'36px 32px',display:'flex',flexDirection:'column',justifyContent:'center',gap:16 }, children:
        kp.map((p) => ({ type:'div', props:{ style:{ display:'flex',alignItems:'flex-start' }, children:[
          { type:'div', props:{ style:{ width:8,height:8,background:color,borderRadius:'50%',marginRight:12,marginTop:7,flexShrink:0,display:'flex' }}},
          { type:'span', props:{ style:{ fontSize:16,color:'#374151',lineHeight:1.6,fontWeight:500 }, children: p }}
        ]}}))
      }}
    ]}
  }
}

function renderE(subtitle, kp, idx, total) {
  const label = total > 1 ? ` ${idx+1}/${total}` : ''
  const tags = kp.slice(0,2)
  const desc = kp.length > 2 ? kp[2] : ''
  return {
    type:'div', props:{ style:{ width:800,height:480,background:'#1E293B',padding:'40px 48px',display:'flex',flexDirection:'column',justifyContent:'space-between',fontFamily:'NotoSansKR' }, children:[
      { type:'div', props:{ style:{ display:'flex',flexDirection:'column' }, children:[
        { type:'div', props:{ style:{ display:'flex',marginBottom:20 }, children:
          { type:'div', props:{ style:{ background:'#FBBF24',padding:'4px 14px',borderRadius:4,display:'flex' }, children:
            { type:'span', props:{ style:{ fontSize:12,fontWeight:800,color:'#1E293B',letterSpacing:1 }, children:'HOT TOPIC' }}}}}},
        { type:'div', props:{ style:{ fontSize:28,fontWeight:900,color:'#F8FAFC',lineHeight:1.35,marginBottom:16,display:'flex' }, children: subtitle }},
        { type:'div', props:{ style:{ fontSize:15,color:'#94A3B8',lineHeight:1.7,display:'flex' }, children: desc }}
      ]}},
      { type:'div', props:{ style:{ display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid rgba(148,163,184,0.2)',paddingTop:20 }, children:[
        { type:'div', props:{ style:{ display:'flex',gap:16 }, children:
          tags.map((t) => ({ type:'span', props:{ style:{ fontSize:13,color:'#FBBF24',fontWeight:700 }, children: '💡 '+t }}))}},
        { type:'span', props:{ style:{ fontSize:12,color:'#64748B' }, children: BLOG_NAME+label }}
      ]}}
    ]}
  }
}

function renderF(subtitle, kp, idx, total) {
  const label = total > 1 ? ` · ${idx+1}/${total}` : ''
  const itemStyles = [
    { bg:'linear-gradient(90deg,#FF6B6B,#FF8E8E)', color:'white' },
    { bg:'linear-gradient(90deg,#4ECDC4,#6ED5CE)', color:'white' },
    { bg:'linear-gradient(90deg,#FFE66D,#FFD93D)', color:'#1a1a2e' },
  ]
  const medals = ['🥇','🥈','🥉','📌','✨']
  return {
    type:'div', props:{ style:{ width:800,height:480,background:'linear-gradient(135deg,#FF6B6B 0%,#FFE66D 50%,#4ECDC4 100%)',padding:'40px 48px',display:'flex',flexDirection:'column',justifyContent:'center',position:'relative',fontFamily:'NotoSansKR' }, children:[
      { type:'div', props:{ style:{ position:'absolute',top:20,left:20,right:20,bottom:20,background:'rgba(255,255,255,0.92)',borderRadius:24,display:'flex' }}},
      { type:'div', props:{ style:{ display:'flex',flexDirection:'column',padding:'20px 28px',position:'relative',zIndex:1 }, children:[
        { type:'div', props:{ style:{ fontSize:12,color:'#FF6B6B',fontWeight:700,letterSpacing:2,marginBottom:16,display:'flex' }, children: BLOG_NAME+' · TODAY'+label }},
        { type:'div', props:{ style:{ fontSize:27,fontWeight:900,color:'#1a1a2e',marginBottom:24,lineHeight:1.35,display:'flex' }, children: subtitle }},
        { type:'div', props:{ style:{ display:'flex',flexDirection:'column',gap:12 }, children:
          kp.map((p,i) => {
            const s = itemStyles[i%3]
            return { type:'div', props:{ style:{ background:s.bg,padding:'12px 20px',borderRadius:10,display:'flex' }, children:
              { type:'span', props:{ style:{ color:s.color,fontSize:16,fontWeight:700 }, children: medals[i%5]+' '+p }}}}
          })
        }}
      ]}}
    ]}
  }
}

async function handleRequest(request) {
  try {
    let data
    if (request.method === 'GET') {
      const url = new URL(request.url)
      data = {
        style: parseInt(url.searchParams.get('style') || '0'),
        subtitle: url.searchParams.get('subtitle') || '테스트 제목',
        keyPoints: (url.searchParams.get('keyPoints') || '핵심1,핵심2,핵심3').split(','),
        index: parseInt(url.searchParams.get('index') || '0'),
        total: parseInt(url.searchParams.get('total') || '1')
      }
    } else {
      data = await request.json()
    }

    const element = renderCard(data)

    const fontData = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-700-normal.woff').then(r => r.arrayBuffer())
    const fontDataBold = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-900-normal.woff').then(r => r.arrayBuffer())

    return new ImageResponse(element, {
      width: 800,
      height: 480,
      fonts: [
        { name: 'NotoSansKR', data: fontData, weight: 400, style: 'normal' },
        { name: 'NotoSansKR', data: fontData, weight: 500, style: 'normal' },
        { name: 'NotoSansKR', data: fontData, weight: 700, style: 'normal' },
        { name: 'NotoSansKR', data: fontDataBold, weight: 800, style: 'normal' },
        { name: 'NotoSansKR', data: fontDataBold, weight: 900, style: 'normal' },
      ],
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message, stack: e.stack }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export async function GET(request) {
  return handleRequest(request)
}

export async function POST(request) {
  return handleRequest(request)
}
