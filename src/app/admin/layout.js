// Bu dosya, admin panelinin genel şablonudur ve sitenin geri kalanından ayırır.
export default function AdminLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}