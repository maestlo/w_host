export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || '방문자';
  
  return NextResponse.json({
    message: `안녕하세요, 창고형 매장 관리자 ${name}님!`,
    timestamp: new Date().toISOString(),
    server: 'Vercel Serverless',
    status: 'success'
  });
}