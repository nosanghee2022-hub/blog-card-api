import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const BLOG_NAME = 'AI 서랍'

// ─── Template A: 그라데이션 프레임 ────────────────────────
function TemplateA({ subtitle, keyPoints, idx, total }) {
  const label = total > 1 ? ` · ${idx + 1}/${total}` : ''
  const colors = ['#667EEA', '#764BA2', '#9F7AEA']
  return (
    <div style={{ width: 800, height: 480, background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)', padding: 28, display: 'flex', fontFamily: 'NotoSansKR' }}>
      <div style={{ background: 'white', borderRadius: 20, padding: '40px 44px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 13, color: '#667EEA', fontWeight: 700, letterSpacing: 2, marginBottom: 12, display: 'flex' }}>{BLOG_NAME} · 핵심 정리{label}</div>
        <div style={{ width: 40, height: 3, background: 'linear-gradient(90deg, #667EEA, #764BA2)', marginBottom: 20, borderRadius: 2, display: 'flex' }} />
        <div style={{ fontSize: 26, fontWeight: 900, color: '#111827', marginBottom: 28, lineHeight: 1.35, display: 'flex' }}>{subtitle}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {keyPoints.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 32, height: 32, background: colors[i % 3], borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 14, flexShrink: 0 }}>
                <span style={{ color: 'white', fontSize: 14, fontWeight: 800 }}>{i + 1}</span>
              </div>
              <span style={{ fontSize: 18, color: '#374151', fontWeight: 500 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Template B: 다크모드 ─────────────────────────────────
function TemplateB({ subtitle, keyPoints, idx, total }) {
  const label = total > 1 ? ` · ${idx + 1}/${total}` : ''
  const emojis = ['⚡', '🧠', '🔗', '🎯', '💡']
  return (
    <div style={{ width: 800, height: 480, background: '#0F172A', padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'NotoSansKR' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ width: 4, height: 28, background: '#38BDF8', borderRadius: 2, marginRight: 12, display: 'flex' }} />
        <span style={{ fontSize: 13, color: '#38BDF8', fontWeight: 700, letterSpacing: 2 }}>{BLOG_NAME} · TECH INSIGHT{label}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 900, color: '#F8FAFC', marginBottom: 32, lineHeight: 1.35, display: 'flex' }}>{subtitle}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {keyPoints.map((p, i) => (
          <div key={i} style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: 12, padding: '14px 20px', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: 20, marginRight: 14 }}>{emojis[i % 5]}</span>
            <span style={{ fontSize: 17, color: '#E2E8F0', fontWeight: 500 }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Template C: 미니멀 화이트 ────────────────────────────
function TemplateC({ subtitle, keyPoints, idx, total }) {
  const label = total > 1 ? ` ${idx + 1}/${total}` : ''
  const padded = [...keyPoints, '', '', ''].slice(0, 3)
  return (
    <div style={{ width: 800, height: 480, background: '#FFFFFF', padding: '44px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #E5E7EB', fontFamily: 'NotoSansKR' }}>
      <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 700, letterSpacing: 3, marginBottom: 20, display: 'flex' }}>{BLOG_NAME}{label}</div>
      <div style={{ fontSize: 30, fontWeight: 900, color: '#111827', marginBottom: 12, lineHeight: 1.3, display: 'flex' }}>{subtitle}</div>
      <div style={{ width: '100%', height: 1, background: '#E5E7EB', margin: '20px 0', display: 'flex' }} />
      <div style={{ display: 'flex', gap: 24 }}>
        {padded.map((p, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#F97316', lineHeight: 1, display: 'flex' }}>0{i + 1}</div>
            <div style={{ fontSize: 14, color: '#6B7280', marginTop: 8, lineHeight: 1.5, display: 'flex', textAlign: 'center' }}>{p}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Template D: 컬러 블록 분할 ──────────────────────────
function TemplateD({ subtitle, keyPoints, idx, total }) {
  const label = total > 1 ? ` · ${idx + 1}/${total}` : ''
  const mainColors = ['#10B981', '#3B82F6', '#8B5CF6', '#EF4444', '#F59E0B']
  const color = mainColors[idx % 5]
  return (
    <div style={{ width: 800, height: 480, background: color, display: 'flex', fontFamily: 'NotoSansKR' }}>
      <div style={{ width: 280, padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: 2, marginBottom: 16, display: 'flex' }}>{BLOG_NAME} · SUMMARY{label}</div>
        <div style={{ fontSize: 26, fontWeight: 900, color: 'white', lineHeight: 1.4, display: 'flex' }}>{subtitle}</div>
        <div style={{ width: 30, height: 3, background: 'rgba(255,255,255,0.5)', marginTop: 16, borderRadius: 2, display: 'flex' }} />
      </div>
      <div style={{ flex: 1, background: 'white', padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
        {keyPoints.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, background: color, borderRadius: '50%', marginRight: 12, marginTop: 7, flexShrink: 0, display: 'flex' }} />
            <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.6, fontWeight: 500 }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Template E: 매거진 / 뉴스 ───────────────────────────
function TemplateE({ subtitle, keyPoints, idx, total }) {
  const label = total > 1 ? ` ${idx + 1}/${total}` : ''
  const tags = keyPoints.slice(0, 2)
  const desc = keyPoints.length > 2 ? keyPoints[2] : ''
  return (
    <div style={{ width: 800, height: 480, background: '#1E293B', padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'NotoSansKR' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', marginBottom: 20 }}>
          <div style={{ background: '#FBBF24', padding: '4px 14px', borderRadius: 4, display: 'flex' }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#1E293B', letterSpacing: 1 }}>HOT TOPIC</span>
          </div>
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: '#F8FAFC', lineHeight: 1.35, marginBottom: 16, display: 'flex' }}>{subtitle}</div>
        <div style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, display: 'flex' }}>{desc}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(148,163,184,0.2)', paddingTop: 20 }}>
        <div style={{ display: 'flex', gap: 16 }}>
          {tags.map((t, i) => (
            <span key={i} style={{ fontSize: 13, color: '#FBBF24', fontWeight: 700 }}>💡 {t}</span>
          ))}
        </div>
        <span style={{ fontSize: 12, color: '#64748B' }}>{BLOG_NAME}{label}</span>
      </div>
    </div>
  )
}

// ─── Template F: 컬러풀 그라데이션 ───────────────────────
function TemplateF({ subtitle, keyPoints, idx, total }) {
  const label = total > 1 ? ` · ${idx + 1}/${total}` : ''
  const itemStyles = [
    { bg: 'linear-gradient(90deg, #FF6B6B, #FF8E8E)', color: 'white' },
    { bg: 'linear-gradient(90deg, #4ECDC4, #6ED5CE)', color: 'white' },
    { bg: 'linear-gradient(90deg, #FFE66D, #FFD93D)', color: '#1a1a2e' },
  ]
  const medals = ['🥇', '🥈', '🥉', '📌', '✨']
  return (
    <div style={{ width: 800, height: 480, background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 50%, #4ECDC4 100%)', padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', fontFamily: 'NotoSansKR' }}>
      <div style={{ position: 'absolute', top: 20, left: 20, right: 20, bottom: 20, background: 'rgba(255,255,255,0.92)', borderRadius: 24, display: 'flex' }} />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 28px', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 12, color: '#FF6B6B', fontWeight: 700, letterSpacing: 2, marginBottom: 16, display: 'flex' }}>{BLOG_NAME} · TODAY{label}</div>
        <div style={{ fontSize: 27, fontWeight: 900, color: '#1a1a2e', marginBottom: 24, lineHeight: 1.35, display: 'flex' }}>{subtitle}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {keyPoints.map((p, i) => {
            const s = itemStyles[i % 3]
            return (
              <div key={i} style={{ background: s.bg, padding: '12px 20px', borderRadius: 10, display: 'flex' }}>
                <span style={{ color: s.color, fontSize: 16, fontWeight: 700 }}>{medals[i % 5]} {p}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const TEMPLATES = [TemplateA, TemplateB, TemplateC, TemplateD, TemplateE, TemplateF]

export async function POST(request) {
  try {
    const { style, subtitle, keyPoints, index, total } = await request.json()

    if (!subtitle || !keyPoints) {
      return new Response(JSON.stringify({ error: 'subtitle and keyPoints required' }), { status: 400 })
    }

    const styleIndex = typeof style === 'number' ? style % 6 : 0
    const Template = TEMPLATES[styleIndex]

    const fontData = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-700-normal.woff').then(r => r.arrayBuffer())
    const fontDataBold = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-900-normal.woff').then(r => r.arrayBuffer())

    return new ImageResponse(
      <Template
        subtitle={subtitle}
        keyPoints={keyPoints}
        idx={index || 0}
        total={total || 1}
      />,
      {
        width: 800,
        height: 480,
        fonts: [
          { name: 'NotoSansKR', data: fontData, weight: 400, style: 'normal' },
          { name: 'NotoSansKR', data: fontData, weight: 500, style: 'normal' },
          { name: 'NotoSansKR', data: fontData, weight: 700, style: 'normal' },
          { name: 'NotoSansKR', data: fontDataBold, weight: 800, style: 'normal' },
          { name: 'NotoSansKR', data: fontDataBold, weight: 900, style: 'normal' },
        ],
      }
    )
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 })
  }
}
